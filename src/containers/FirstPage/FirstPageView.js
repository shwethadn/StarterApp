/**
 * Authenticate Screen
 *  - Entry screen for all authentication
 *  - User can tap to login, forget password, signup...
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';

// Components
import { Spacer, Button } from '@ui/';

/* Styles ==================================================================== */
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
class MainPage extends Component {
  static componentName = 'MainPage';
    render = () => (
        <View style={[AppStyles.containerCentered, AppStyles.container, styles.background]}>
          <Button
            title={'DISCOVER'}
            onPress={Actions.app}
          />
          <Spacer size={30} />

          <Button
            title={'PLANNER'}
            onPress={Actions.recipesListing}
          />
          <Spacer size={30} />

          <Button
            title={'PATIENTS'}
            onPress={Actions.login}
          />
        </View>
    );
}

/* Export Component ==================================================================== */
export default MainPage;
