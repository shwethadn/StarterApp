/**
 * Tabs Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import {Actions, Scene } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes } from '@theme/';

// Components
import { TabIcon } from '@ui/';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';

// Scenes
import Icon from 'react-native-vector-icons/FontAwesome';
import Placeholder from '@components/general/Placeholder';
import StyleGuide from '@containers/StyleGuideView';
import Recipes from '@containers/recipes/Browse/BrowseContainer';
import RecipeView from '@containers/recipes/RecipeView';
import ProductGrid from '@containers/Products/ProductList/ProductsGridView';
import ProductDetails from '@containers/Products/ProductView';
import ProductList from '@containers/Products/ProductList/ProductsListView';

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  renderLeftButton: () => <NavbarMenuButton />,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
    <Scene
      {...navbarPropsTabs}
      key={'options'}
      title={'stapp'}
      icon={props => TabIcon({ ...props, icon: 'search' })}>

      <Scene
        {...navbarPropsTabs}
        key={'productsList'}
        component={ProductList}
        title={"Products"}
        rightTitle={<Icon name="th" size={30} color="white" />}
        onRight={()=>Actions.productsGrid()}
        analyticsDesc={'ProductList: Products'}
      />

      <Scene
        key={'productsView'}
        title={'Product Details'}
        component={ProductDetails}
        analyticsDesc={'ProductDetails: Product Details'}
      />
    </Scene>

    <Scene
      key={'timeline'}
      {...navbarPropsTabs}
      title={'Coming Soon'}
      component={Placeholder}
      icon={props => TabIcon({ ...props, icon: 'timeline' })}
      analyticsDesc={'Placeholder: Coming Soon'}
    />

    <Scene
      key={'styleGuide'}
      {...navbarPropsTabs}
      title={'Style Guide'}
      component={StyleGuide}
      icon={props => TabIcon({ ...props, icon: 'speaker-notes' })}
      analyticsDesc={'StyleGuide: Style Guide'}
    />
  </Scene>
);

export default scenes;
