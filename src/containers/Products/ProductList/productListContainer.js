/**
 * Individual Recipe Card Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// Actions
import * as UserActions from '@redux/user/actions';

// Consts and Libs
import AppUtil from '@lib/util';

// Components
import ProductListRender from './ProductListView';


/* Component ==================================================================== */
class ProductList extends Component {
  static componentName = 'ProductList';

  const data = [ 
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

  /**
    * On Press of Card
    */
  onPressCard = () => {
    Actions.recipeView({
      title: this.props.recipe.title.rendered,
      product: this.data,
    });
  }

  /**
    * Data from API is a bit messy - clean it up here
    */
  // parseRecipeData = (data) => {
  //   const recipe = data;
  //   const { title, content } = data;
  //   const featuredImg = data.better_featured_image;
  //   title.rendered = AppUtil.htmlEntitiesDecode(title.rendered);

  //   // Produce a summary
  //   content.rendered = AppUtil.htmlEntitiesDecode(content.rendered);
  //   content.rendered = AppUtil.stripTags(content.rendered);
  //   const summary = AppUtil.limitChars(content.rendered, 60);

  //   // Is there a better way to test this?
  //   recipe.featured_image = (
  //     featuredImg &&
  //     featuredImg.media_details &&
  //     featuredImg.media_details.sizes &&
  //     featuredImg.media_details.sizes.medium &&
  //     featuredImg.media_details.sizes.medium.source_url
  //   ) ?
  //     featuredImg.media_details.sizes.medium.source_url : '';

  //   return {
  //     image: recipe.featured_image,
  //     title: title.rendered,
  //     content: summary,
  //   };
  // }

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
