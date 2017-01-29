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

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';

// Components
import { Card, Spacer, Text } from '@ui/';

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

const product = {
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
  brand: "ALEMBIC MEGACARE", 
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
};

/* Component ==================================================================== */
class ProductDetails extends Component {
  static componentName = 'ProductDetails';

  render = () => {

    return (
      <ScrollView style={[AppStyles.container]}>
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
          <Text>Description: {product.description}</Text>
        </Card>

        <Spacer size={20} />
      
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default ProductDetails;
