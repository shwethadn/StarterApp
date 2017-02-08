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
  tile: {
    height: 250,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
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
    var p = this.props.prod;
    const goDetailsPage = () => Actions.productsView({prod_id: p.id});
    return (
      <TouchableOpacity key={p.id} activeOpacity={0.8} onPress={goDetailsPage} style={styles.tile}>
        <Card image={require('@images/blank_product.jpg')} style={styles.thumbnail}>
          <View style={styles.thumbnail}>
            <Text h3>{p.name}</Text>
            <Text>UOM: {p.quantity}</Text>
            <Text>Price: {p.price}</Text>
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
    return <Grid prod = {item} key={item.id} />
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
