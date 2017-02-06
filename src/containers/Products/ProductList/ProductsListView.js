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
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ListView,
} from 'react-native';
import { Icon } from 'react-native-elements';

import { Actions, Scene } from 'react-native-router-flux';
import AppAPI from '@lib/api';
import { APIConfig } from '@constants/';

// Consts and Libs
import { AppStyles } from '@theme/';

// Components
import {Card, Text, Spacer } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  favourite: {
    position: 'absolute',
    width: 300,
    height: 200,
  },
});

fetch("http://192.168.0.113:3000/api/v1/products", {method: "GET"})
.then((response) => response.json())
.then((responseData) => {
 productData = responseData;
}).done();

/* Component ==================================================================== */
class ProductList extends Component {
  static componentName = 'ProductList';

  renderProducts() {
    if (productData["products"] != undefined){
      return productData["products"].map(function(prod){
        console.log("PRODUT ID");
        console.log(prod.id);
        const goDetailsPage = () => Actions.productsView({prod_id: prod.id}); 
        return(
          <ScrollView style={[AppStyles.container]}>
            <Card>
              <TouchableOpacity activeOpacity={0.8} onPress={goDetailsPage}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: 320, height: 200, backgroundColor: 'white'}}>
                    <Image
                      source={require('@images/blank_product.jpg')}
                      style={[styles.favourite]}
                    />
                  </View>
                  <View style={{width: 480, height: 200, backgroundColor: 'white'}}>
                    <Text h3>{prod.name}</Text>
                    <Text>{prod.description}</Text>
                    <Text>UOM: {prod.quantity}</Text>
                    <Text>Price: Rs. {prod.price}/-({prod.tax_type})</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Card>
            <Spacer size={10} />
          </ScrollView>
        );
      });
    } else {
      return(<Text h3>No Products</Text>)
    }
  }

  render = () => {
    return (
      <ScrollView style={[AppStyles.container]}>
        <Spacer size={70} />
        {this.renderProducts()}
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default ProductList;
