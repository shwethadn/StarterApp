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

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  list: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap'
  },
  item: {
      backgroundColor: '#CCC',
      margin: 10,
      width: 100,
      height: 100
  }
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
class ProductGrid extends Component {
  static componentName = 'ProductGrid';

  renderGridProducts() {
    return customData.map(function(prod, i){
      // return(
      //   <TouchableOpacity activeOpacity={0.8}>
      //     <Card image={require('@images/blank_product.jpg')}>
      //       <View style={[AppStyles.paddingBottomSml]}>
      //         <Text h3>{prod.name}</Text>
      //         <Text>{prod.description}</Text>
      //       </View>
      //     </Card>
      //   </TouchableOpacity>
      // );

      var GridLayoutExample = React.createClass({
      // ...
      render: function() {
        return (
          <ListView contentContainerStyle={styles.list}
            dataSource={require('@images/blank_product.jpg')}
            renderRow={(prod.name) => <Text style={styles.item}>{prod.name}</Text>}
          />
        );
      }
    });
  }

  render = () => {
    return (
      <ScrollView style={[AppStyles.container]}>
        {this.renderGridProducts()}
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default ProductGrid;
