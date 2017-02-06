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
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import AppAPI from '@lib/api';

// Consts and Libs
import { AppStyles } from '@theme/';

import {Card, Text, Spacer } from '@ui/';
import GridView from 'react-native-grid-view'

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  listView: {
    paddingTop: 60,
  },
  thumbnail: {
    width: 220,
    height: 120,
  },
});

var customData = fetch("http://192.168.0.113:3000/api/v1/products", {method: "GET"})
  .then((response) => response.json())
  .then((responseData) => {
   customData = responseData;
  }).done();

class Grid extends Component{
  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={Actions.productsView}>
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

/* Component ==================================================================== */
class ProductGrid extends Component {
  static componentName = 'ProductGrid';

  renderItem(item) {
    return <Grid prod = {item} />
  }

  render = () => {
    return (
      <ScrollView style={[AppStyles.container]}>
        <GridView
          items={customData["products"]}
          itemsPerRow={3}
          renderItem={this.renderItem}
          style={styles.listView}
        />
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default ProductGrid;
