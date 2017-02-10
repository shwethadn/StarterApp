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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements'

import { Actions, Scene } from 'react-native-router-flux';
import AppAPI from '@lib/api';
import { APIConfig } from '@constants/';

// Consts and Libs
import { AppStyles } from '@theme/';

// Components
import {Card, Text, Spacer, Button } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  favourite: {
    position: 'absolute',
    width: 280,
    height: 200,
  },
  twoButtonView: {
    flexDirection: 'row',
  },
});

var productData = [];
url = "http://192.168.0.113:3000/api/v1/products";
fetch(url, {method: "GET"}).then((response) => response.json())
  .then((responseData) => {
  productData = responseData;
}).done();

var Accordion = require('react-native-accordion');

var products = [];

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
          <ScrollView key={prod.id} style={[AppStyles.container]}>
            <Card>
              <TouchableOpacity activeOpacity={0.8} onPress={goDetailsPage}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: 300, height: 200, backgroundColor: 'white'}}>
                    <Image
                      source={require('@images/blank_product.jpg')}
                      style={[styles.favourite]}
                    />
                  </View>
                  <View style={{width: 400, height: 200, backgroundColor: 'white'}}>
                    <Text h3>{prod.name}</Text>
                    <Text numberOfLines={2}>Description: {prod.description}</Text>
                    <Text>Company: {prod.brand}</Text>
                    <Text>Brand: {prod.brand}</Text>
                    <Text>Packaging: {prod.quantity}</Text>
                    <Text>Price: Rs. {prod.price}/-({prod.tax_type})</Text>
                    <Button title={'Add to Cart'}
                      backgroundColor={'#33BB76'}
                      onPress={Actions.myCart}/>
                  </View>
                </View>
                <Accordion
                  header={<Icon name="th-list" size={20} color="blue" />}
                  content={<Text>Product ID: {prod.id} View More Details dnfbvd vjdhfv fdjvd jhbjdvjdvjdf vdbhv djhf v</Text>}
                  easing="easeOutCubic"
                  underlayColor="white"
                />
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
        <Card containerStyle={{padding: 1}}>
          <View style={styles.twoButtonView}>
            <Button
              small
              outlined
              iconRight
              title={'FILTER'}
              icon={{ name: 'filter' }}
              onPress={Actions.comingSoon}
            />
            <Button
              small
              outlined
              iconRight
              title={'RANGE'}
              icon={{ name: 'filter' }}
              onPress={Actions.comingSoon}
            />
            <Button
              small
              outlined
              iconRight
              title={'SORT'}
              icon={{ name: 'cached' }}
              onPress={Actions.comingSoon}
            />
            <Spacer size={5} />
          </View>
        </Card>

        <ScrollView>
          {this.renderProducts()}
        </ScrollView>
        
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default ProductList;
