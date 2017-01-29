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

// Consts and Libs
import { AppStyles } from '@theme/';

// Components
import {Card, Text, Spacer } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  favourite: {
    position: 'absolute',
    top: -100,
    right: 10,
  },
});

var customData = [
  {
    id: 72514,
    name: "GODREJ Expert Liquid Hair Dye - Natural Black 1",
    description: "NA", 
    is_active: true,
    company_code: "NA",
    price: 55.0,
    unit_rate: 0.0,
    quantity: "Pack",
    created_by: 545,
    modified_by: 545,
    image_path: null,
    packing_id: 369,
    color_id: 4,
    manufacturer_id: 32892,
    product_type: "Product",
    brand: "",
    tax_on: "Cost",
    banned: false,
    tax_type: "incl of tax",
    is_out_of_stock: false,
    size: "20ML",
    return_days: 7,
    refrigerated_item: false,
    out_of_stock_at: null,
    min_order: 1,
    max_order: null
  },
  {
    id: 72515,
    name: "GODREJ Expert Liquid Hair Dye - Natural Black 1", 
    description: "NA", 
    is_active: true, 
    company_code: "NA",
    price: 85.0, 
    unit_rate: 0.0, 
    quantity: "Pack", 
    created_by: 545, 
    modified_by: 545, 
    image_path: null, 
    packing_id: 402, 
    color_id: 4, 
    manufacturer_id: 32892, 
    product_type: "Product", 
    brand: "",
    tax_on: "Cost", 
    banned: false, 
    tax_type: "incl of tax", 
    is_out_of_stock: false, 
    size: "40ML", 
    return_days: 7, 
    refrigerated_item: false, 
    out_of_stock_at: null, 
    min_order: 1, 
    max_order: null
  },

  {
    id: 72516, 
    name: "MEGAGLIPTIN TAB", 
    description: "NA", 
    is_active: true, 
    company_code: "636054", 
    price: 70.0, 
    unit_rate: 0.0, 
    quantity: "Strip", 
    created_by: 1311, 
    modified_by: null, 
    image_path: null, 
    packing_id: 237, 
    color_id: 25, 
    manufacturer_id: 206, 
    product_type: "Drug", 
    brand: "", 
    tax_on: "MRP", 
    banned: false, 
    tax_type: "incl of tax", 
    is_out_of_stock: false, 
    size: "", 
    return_days: 7, 
    refrigerated_item: false, 
    out_of_stock_at: null, 
    min_order: 1, 
    max_order: null
  }
];

/* Component ==================================================================== */
class ProductList extends Component {
  static componentName = 'ProductList';

  renderProducts() {
    return customData.map(function(prod){
      return(
        <ScrollView style={[AppStyles.container]}>
          <Card>
            <TouchableOpacity activeOpacity={0.8} onPress={Actions.productsView}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 400, height: 180, backgroundColor: 'white'}}>
                  <Image
                    source={require('@images/blank_product.jpg')}
                    style={[styles.favourite]}
                  />
                </View>
                <View style={{width: 400, height: 180, backgroundColor: 'white'}}>
                  <Text h3>{prod.name}</Text>
                  <Text>{prod.description}</Text>
                  <Text>UOM: {prod.quantity}</Text>
                  <Text>Price: Rs. {prod.price}/-({prod.tax_type})</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Card>
          <Spacer size={10} />
          <Card>
            <TouchableOpacity activeOpacity={0.8} onPress={Actions.productsView}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 400, height: 180, backgroundColor: 'white'}}>
                  <Image
                    source={require('@images/blank_product.jpg')}
                    style={[styles.favourite]}
                  />
                </View>
                <View style={{width: 400, height: 180, backgroundColor: 'white'}}>
                  <Text h3>{prod.name}</Text>
                  <Text>{prod.description}</Text>
                  <Text>UOM: {prod.quantity}</Text>
                  <Text>Price: Rs. {prod.price}/-({prod.tax_type})</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Card>
          <Spacer size={10} />

          <Card>
            <TouchableOpacity activeOpacity={0.8} onPress={Actions.productsView}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 400, height: 180, backgroundColor: 'white'}}>
                  <Image
                    source={require('@images/blank_product.jpg')}
                    style={[styles.favourite]}
                  />
                </View>
                <View style={{width: 400, height: 180, backgroundColor: 'white'}}>
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
