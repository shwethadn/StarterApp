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

// Components
import Drawer from '@containers/ui/DrawerContainer';

// Scenes
import AppLaunch from '@containers/Launch/LaunchContainer';
import Placeholder from '@components/general/Placeholder';
import MainPage from '@containers/FirstPage/FirstPageView';
import ProductList from '@containers/Products/ProductList/ProductsListView';
import ProductDetails from '@containers/Products/ProductView';
import AuthScenes from './auth';
import TabsScenes from './tabs';

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
      
    </Scene>
    {/* First Page */}
    <Scene
      key={'firstPage'}
      title={'First Page'}
      component={MainPage}
      analyticsDesc={'MainPage: First Page'}
    />
    <Scene
      key={'productsList'}
      title={'Products'}
      component={ProductList}
      analyticsDesc={'ProductList: Products'}
    />
    <Scene
      key={'productsView'}
      title={'Product Details'}
      component={ProductDetails}
      analyticsDesc={'ProductDetails: Product Details'}
    />
  </Scene>,
);
