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
} from 'react-native';
import { Icon } from 'react-native-elements';

// Consts and Libs
import { AppStyles } from '@theme/';

// Components
import { Card, Text } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  favourite: {
    position: 'absolute',
    top: -45,
    right: 0,
  },
});

var customData = [
  {
    id: 72514,
    name: "GODREJ Expert Liquid Hair Dye - Natural Black 1",
    description: "Soft, clear Aerosol Mask with anatomical form is ideal for long term use.", 
  },
  {
    id: 72515,
    name: "GODREJ Expert Liquid Hair Dye - Natural Black 1", 
    description: "NA", 
  },

  {
    id: 72516, 
    name: "MEGAGLIPTIN TAB", 
    description: "NA", 
  }
];

/* Component ==================================================================== */
class ProductList extends Component {
  static componentName = 'ProductList';

  renderProducts() {
    return customData.map(function(prod, i){
      return(
        <TouchableOpacity activeOpacity={0.8}>
          <Card image={require('@images/blank_product.jpg')}>
            <View style={[AppStyles.paddingBottomSml]}>
              <Text h3>{prod.name}</Text>
              <Text>{prod.description}</Text>
            </View>
          </Card>
        </TouchableOpacity>
      );
    });
  }

  render = () => {
    return (
      <ScrollView style={[AppStyles.container]}>
        {this.renderProducts()}
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default ProductList;
