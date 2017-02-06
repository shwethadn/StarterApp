/**
 * Individual Recipe Card Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import AppUtil from '@lib/util';

// Components
import ProductListRender from './ProductListView';


/* Component ==================================================================== */
class ProductList extends Component {
  static componentName = 'ProductList';

  render = () => {
    const { product } = this.data;

    return (
      <ProductListRender
        title={prod.name}
        content={prod.description}
        onPress={this.onPressCard}
      />
    );
  }
}

/* Export Component ==================================================================== */
export default ProductList;
