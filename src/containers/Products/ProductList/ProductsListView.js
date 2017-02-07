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
  TextInput,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  twoButtonView: {
    flexDirection: 'row',
  },
});

url = "http://192.168.0.113:3000/api/v1/products";
fetch(url, {method: "GET"}).then((response) => response.json())
  .then((responseData) => {
  productData = responseData;
}).done();

var products = "";

/* Component ==================================================================== */
class ProductList extends Component {
  static componentName = 'ProductList';

  constructor(props) {
    super(props);
    this.state = { search: '', products: ''}
    if (this.props.search != "" & this.props.search != undefined){
      this.state = {search: this.props.search};
      url = url+"?search="+this.state.search;
    }
    fetch(url, {method: "GET"}).then((response) => response.json())
      .then((responseData) => {
      products = responseData;
    }).done();
    this.state.products = products["products"];
  }

  renderProducts() {
    if (productData["products"] != undefined){
      return productData["products"].map(function(prod){
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
    const goSearchPage = () => Actions.productsGrid({search: this.state.search});
    return (
      <View style={[AppStyles.container]}>
        <Card>
          <View style={styles.twoButtonView}>
            <TextInput
              style={{height: 40, borderColor: 'gray', width: 600}}
              onChangeText={(search) => this.setState({search})}
              value={this.state.search}
            />
            <TouchableOpacity activeOpacity={0.8} onPress={goSearchPage}>
              <Icon name="search" size={30} color="blue" />
            </TouchableOpacity>
          </View>
        </Card>
        <ScrollView>
          {this.renderProducts()}
        </ScrollView>
        <Card>
          <View style={styles.twoButtonView}>
            <Button
              large
              outlined
              iconRight
              title={'FILTER'}
              icon={{ name: 'cached' }}
              onPress={Actions.comingSoon}
            />
            <Button
              small
              outlined
              iconRight
              title={'RANGESORT'}
              icon={{ name: 'cached' }}
              onPress={Actions.comingSoon}
            />
            <Button
              small
              outlined
              iconRight
              title={'Sort'}
              icon={{ name: 'cached' }}
              onPress={Actions.comingSoon}
            />
            <Spacer size={10} />
          </View>
        </Card>
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default ProductList;
