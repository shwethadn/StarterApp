/**
 * Login Screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  AsyncStorage,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FormValidation from 'tcomb-form-native';
import { Actions, Scene } from 'react-native-router-flux';

// Consts and Libs
import AppAPI from '@lib/api';
import { AppStyles, AppSizes } from '@theme/';

// Components
import { Alerts, Card, Spacer, Text, Button } from '@ui/';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'transparent',
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  logo: {
    width: AppSizes.screen.width * 0.85,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */
class Login extends Component {
  static componentName = 'Login';

  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    // Email Validation
    const validEmail = FormValidation.refinement(
      FormValidation.String, (email) => {
        const regularExpression = /^.+@.+\..+$/i;

        return regularExpression.test(email);
      },
    );

    // Password Validation - Must be 8 chars long
    const validPassword = FormValidation.refinement(
      FormValidation.String, (password) => {
        if (password.length < 8) return false;
        return true;
      },
    );

    this.state = {
      resultMsg: {
        status: '',
        success: '',
        error: '',
      },
      form_fields: FormValidation.struct({
        Email: validEmail,
        Password: validPassword,
      }),
      empty_form_values: {
        Email: '',
        Password: '',
      },
      form_values: {},
      options: {
        fields: {
          Email: {
            error: 'Please enter a valid email',
            autoCapitalize: 'none',
            clearButtonMode: 'while-editing',
          },
          Password: {
            error: 'Your new password must be more than 6 characters',
            clearButtonMode: 'while-editing',
            secureTextEntry: true,
          },
        },
      },
    };
  }

  componentDidMount = async () => {
    // Get user data from AsyncStorage to populate fields
    const values = await AsyncStorage.getItem('api/credentials');
    const jsonValues = JSON.parse(values);

    if (values !== null) {
      this.setState({
        form_values: {
          Email: jsonValues.username,
          Password: jsonValues.password,
        },
      });
    }
  }

  /**
    * Login
    */
  login = () => {
    // Get new credentials and update
    const credentials = this.form.getValue();

    // Form is valid
    if (credentials) {
      this.setState({ form_values: credentials }, () => {
        this.setState({ resultMsg: { status: 'One moment...' } });

        // Scroll to top, to show message
        if (this.scrollView) {
          this.scrollView.scrollTo({ y: 0 });
        }

        this.props.login({
          username: credentials.Email,
          password: credentials.Password,
        }, true).then(() => {
          this.setState({
            resultMsg: { success: 'Awesome, you\'re now logged in!' },
          }, () => {
            setTimeout(() => {
              // Actions.app({ type: 'reset' });
               Actions.firstPage();
            }, 1000);
          });
        }).catch((err) => {
          const error = AppAPI.handleError(err);
          this.setState({ resultMsg: { error } });
        });
      });
    }
  }

  render = () => {
    const Form = FormValidation.form.Form;

    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        ref={(a) => { this.scrollView = a; }}
        style={[AppStyles.container]}
        contentContainerStyle={[AppStyles.container]}
      >
        <Spacer size={10} />
        <Image
          source={require('@images/logo.png')}
          style={[styles.logo]}
        />

        <Spacer size={70} />

        <Card>
          <Text p style={[AppStyles.textCenterAligned, AppStyles.h1]}>
            Login to Continue
          </Text>
          <Alerts
            status={this.state.resultMsg.status}
            success={this.state.resultMsg.success}
            error={this.state.resultMsg.error}
          />

          <Form
            ref={(b) => { this.form = b; }}
            type={this.state.form_fields}
            value={this.state.form_values}
            options={this.state.options}
          />

          <Button
            title={'Login'}
            onPress={this.login}
          />

          <Spacer size={10} />

          <Text p style={[AppStyles.textCenterAligned]}>
            - or -
          </Text>

          <Spacer size={10} />

          <Button
            title={'Sign Up'}
            onPress={Actions.signUp}
          />
        </Card>
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default Login;
