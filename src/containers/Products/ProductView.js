/**
 * Recipe View Screen
 *  - The individual recipe screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import AppAPI from '@lib/api';

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';

// Components
import { Card, Spacer, Text, Button } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  twoButtonView: {
    flexDirection: 'row',
  },
  background: {
    backgroundColor: 'transparent',
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  favourite: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  featuredImage: {
    height: AppSizes.screen.width * 0.1,
    resizeMode: 'contain',
  },
  logo: {
    width: AppSizes.screen.width * 0.95,
    resizeMode: 'contain',
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: 'black'
  },
  mainviewStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor:'green',
    flexDirection:'row',
    height:80,
    alignItems:'center',
  },
  bottomButtons: {
    alignItems:'center',
    justifyContent: 'center',
    flex:1,
  },
  footerText: {
    color:'white',
    fontWeight:'bold',
    alignItems:'center',
    fontSize:30,
  },
});
var product = "";

class Hr extends Component {
    constructor(props) {
      super(props);
      this.renderLine = this.renderLine.bind(this);
    }

    renderLine(key) {
      return <View key={key} style={[styles.line, this.props.lineStyle]} />
    }

    render() {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: this.props.marginLeft, marginRight: this.props.marginRight }}>
            {this.renderLine(1)}
        </View>
      )
    }
}

Hr.propTypes = {
    lineStyle: PropTypes.shape({}),
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
};

Hr.defaultProps = {
    marginLeft: 0,
    marginRight: 0
};


/* Component ==================================================================== */
class ProductDetails extends Component {
  static componentName = 'ProductDetails';

  constructor(props) {
    super(props);
    this.state = { search: ''}
  }

  prodinfo(){
    fetch("http://192.168.0.113:3000/api/v1/products/"+this.props.prod_id, {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
     product = responseData;
    }).done()
    return (product);
  }

  relatedImages(){
    return(
      <View style={{width: 180, height: 180, backgroundColor: 'white'}}>
        <Image
          source={require('@images/logo.png')}
          style={[styles.favourite]}
        />
      </View>
    );
  }

  render = () => {
    const goSearchPage = () => Actions.productsGrid({search: this.state.search});
    product = this.prodinfo();
    return (
      <View style={[AppStyles.container, styles.background]}>
        <Spacer size={50} />
        <Card containerStyle={{padding: 1}}>
          <View style={styles.twoButtonView}>
            <TextInput
              style={{height: 40, borderColor: 'blue', width: 700}}
              onChangeText={(search) => this.setState({search})}
              value={this.state.search}
              placeholder = "Type Here..."
            />
            <TouchableOpacity activeOpacity={0.8} onPress={goSearchPage}>
              <Icon name="search" size={30} color="blue" />
            </TouchableOpacity>
          </View>
        </Card>
        <ScrollView>
            <Spacer size={20} />
            <Text h2>{product.name}</Text>
            <Text>Brand: {product.brand}</Text>
            <Spacer size={20} />
            <Image
              source={require('@images/blank_product.jpg')}
              style={[styles.logo]}
            />
            <Spacer size={30} />
            <ScrollView horizontal>
              <View style={{flex: 1, flexDirection: 'row'}}>
                {this.relatedImages()}
                {this.relatedImages()}
                {this.relatedImages()}
                {this.relatedImages()}
                {this.relatedImages()}
                {this.relatedImages()}
                {this.relatedImages()}
                {this.relatedImages()}
                {this.relatedImages()}
              </View>
            </ScrollView>
            <Hr />
            <Spacer size={20} />
            <View style={[AppStyles.containerCentered]}>
              <Text>UOM: {product.quantity}</Text>
              <Text>product id: {this.props.prod_id}</Text>
              <Text numberOfLines={2}>Description: {product.description}</Text>
              <Text h3>Price: {product.price}/-</Text>
            </View>
            <Spacer size={10} />
          <Spacer size={20} />
        </ScrollView>
        <View style={styles.mainviewStyle}>
          <View style={styles.footer}>
            <View style={styles.bottomButtons}>
              <Text style={[styles.footerText]}>Rs. {product.price}/-</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={Actions.myCart}
              style={styles.bottomButtons}>
              <Text style={[styles.footerText]}>ADD TO CART</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Spacer size={5} />
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default ProductDetails;
