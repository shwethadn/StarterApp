/**
 * App Navigation
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

import { Text, Button } from '@ui/';

// Components
import Drawer from '@containers/ui/DrawerContainer';

// Scenes
import AppLaunch from '@containers/Launch/LaunchContainer';
import Placeholder from '@components/general/Placeholder';
import MainPage from '@containers/FirstPage/FirstPageView';
import ProductList from '@containers/Products/ProductList/ProductsListView';
import ProductGrid from '@containers/Products/ProductList/ProductsGridView';
import MyCart from '@containers/Cart/MyCartView';
import OrderSummery from '@containers/Cart/OrderSummery';
import ProductDetails from '@containers/Products/ProductView';
import AuthScenes from './auth';
import TabsScenes from './tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Recipes from '@containers/recipes/Browse/BrowseContainer';
import RecipeView from '@containers/recipes/RecipeView';

/* Routes ==================================================================== */
export default Actions.create(
  <Scene key={'root'} {...AppConfig.navbarProps}>
    <Scene
      hideNavBar
      key={'splash'}
      component={AppLaunch}
      analyticsDesc={'AppLaunch: Launching App'}
    />

    {/* Auth */}
    {AuthScenes}

    {/* Main App */}
    <Scene key={'app'} {...AppConfig.navbarProps} title={AppConfig.appName} hideNavBar={false} type={ActionConst.RESET}>
      {/* Drawer Side Menu */}
      <Scene key={'home'} component={Drawer} initial={'tabBar'}>
        {/* Tabbar */}
        {TabsScenes}
      </Scene>
      
      {/* General */}
      <Scene
        key={'comingSoon'}
        title={'Coming Soon'}
        component={Placeholder}
        analyticsDesc={'Placeholder: Coming Soon'}
      />

      <Scene
        key={'productsList'}
        title={'Products'}
        component={ProductList}
        rightTitle={<Icon name="th" size={30} color="white" />}
        onRight={()=>Actions.productsGrid()}
        analyticsDesc={'ProductList: Products'}
      />

      <Scene
        key={'productsView'}
        title={'Product Details'}
        component={ProductDetails}
        rightTitle={<Icon name="th" size={30} color="white" />}
        onRight={()=>Actions.productsGrid()}
        analyticsDesc={'ProductDetails: Product Details'}
      />

      <Scene
        key={'productsGrid'}
        title={'Product Grid view'}
        component={ProductGrid}
        rightTitle={<Icon name="th-list" size={30} color="white" />}
        onRight={()=>Actions.productsList()}
        analyticsDesc={'ProductGrid: Product Grid View'}
      />
      <Scene
        key={'myCart'}
        rightTitle={<Icon name="cart-plus" size={30} color="white" />}
        onRight={()=>Actions.login()}
        title={'MY CART'}
        component={MyCart}
        analyticsDesc={'MyCart: My Cart'}
      />
      <Scene
        key={'orderSummery'}
        rightTitle={<Icon name="cart-plus" size={30} color="white" />}
        onRight={()=>Actions.myCart()}
        title={'Order Summery'}
        component={OrderSummery}
        analyticsDesc={'OrderSummery: Order Summery'}
      />
    </Scene>
    
    <Scene
      {...AppConfig.navbarProps}
      key={'recipesListing'}
      component={Recipes}
      title={AppConfig.appName}
      analyticsDesc={'Recipes: Browse Recipes'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'recipeView'}
      component={RecipeView}
      title={'View Recipe'}
      analyticsDesc={'RecipeView: View Recipe'}
    />
  </Scene>
);
