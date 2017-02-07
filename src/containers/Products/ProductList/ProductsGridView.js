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
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import AppAPI from '@lib/api';

// Consts and Libs
import { AppStyles } from '@theme/';

import {Card, Text, Spacer } from '@ui/';
import GridView from 'react-native-grid-view'

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  listView: {
    paddingTop: 10,
  },
  thumbnail: {
    width: 220,
    height: 120,
  },
  twoButtonView: {
    flexDirection: 'row',
  },
});

var url = "http://192.168.0.113:3000/api/v1/products";

var customData = fetch(url, {method: "GET"})
  .then((response) => response.json())
  .then((responseData) => {
   customData = responseData;
  }).done();

class Grid extends Component{
  render() {
    const goDetailsPage = () => Actions.productsView({prod_id: this.props.prod.id});
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={goDetailsPage}>
        <Card image={require('@images/blank_product.jpg')}>
          <View style={[AppStyles.paddingBottomSml]}>
            <View style={styles.thumbnail}>
              <Text h3>{this.props.prod.name}</Text>
              <Text>UOM: {this.props.prod.quantity}</Text>
              <Text>Price: {this.props.prod.price}</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

var products = "";
/* Component ==================================================================== */
class ProductGrid extends Component {
  static componentName = 'ProductGrid';

  constructor(props) {
    super(props);
    this.state = { search: this.props.search };
  }

  list(){
    url = "http://192.168.0.113:3000/api/v1/products";
    if (this.props.search != "" & this.props.search != undefined)
      url = url+"?search="+this.props.search;
    fetch(url, {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
     products = responseData;
    }).done();
    if (products["products"] == undefined)
      return(customData["products"]);
    else
      return(products["products"]);
  }

  renderItem(item) {
    return <Grid prod = {item} />
  }

  render = () => {
    const goSearchPage = () => Actions.productsGrid({search: this.state.search});
    return (
      <View style={[AppStyles.container]}>
        <Spacer size={50} />
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
        <ScrollView style={[AppStyles.container]}>
          <GridView
            items={this.list()}
            itemsPerRow={3}
            renderItem={this.renderItem}
            style={styles.listView}
          />
        </ScrollView>
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default ProductGrid;
