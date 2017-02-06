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
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import AppAPI from '@lib/api';

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';

// Components
import { Card, Spacer, Text, Button } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
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
});
var product = "";

/* Component ==================================================================== */
class ProductDetails extends Component {
  static componentName = 'ProductDetails';

  prodinfo(){
    fetch("http://192.168.0.113:3000/api/v1/products/"+this.props.prod_id, {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
     product = responseData;
    }).done()
    return (product);
  }

  render = () => {
    product = this.prodinfo();
    return (
      <View style={[AppStyles.container]}>
        <ScrollView>
          <Spacer size={50} />
          <Card>
            
            <Text h2>{product.name}</Text>
            <Text>Brand: {product.brand}</Text>
            <Spacer size={10} />
            <Image
              source={require('@images/blank_product.jpg')}
              style={[styles.logo]}
            />
            <Spacer size={20} />
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{width: 180, height: 180, backgroundColor: 'white'}}>
                <Image
                  source={require('@images/logo.png')}
                  style={[styles.favourite]}
                />
              </View>
              <View style={{width: 180, height: 180, backgroundColor: 'white'}}>
                <Image
                  source={require('@images/logo.png')}
                  style={[styles.favourite]}
                />
              </View>
              <View style={{width: 180, height: 180, backgroundColor: 'white'}}>
                <Image
                  source={require('@images/logo.png')}
                  style={[styles.favourite]}
                />
              </View>
              <View style={{width: 180, height: 180, backgroundColor: 'white'}}>
                <Image
                  source={require('@images/logo.png')}
                  style={[styles.favourite]}
                />
              </View>
            </View>
            <Text>UOM: {product.quantity}</Text>
            <Text>product id: {this.props.prod_id}</Text>
            <Text>Description: {product.description}</Text>
            <Text>Price: {product.price}/-</Text>
            <Spacer size={10} />
          </Card>
          <Spacer size={20} />
        </ScrollView>
        <Button
          title={'ADD TO CART'}
          onPress={Actions.myCart}
        />
        <Spacer size={10} />
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default ProductDetails;
