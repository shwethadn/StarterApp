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
  Modal,
  TextInput,
} from 'react-native';
// import { Icon } from 'react-native-elements';

import { Actions, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

// Consts and Libs
import { AppStyles } from '@theme/';
import AppAPI from '@lib/api';

// Components
import {Card, Text, Spacer, Button } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  favourite: {
    position: 'absolute',
    width: 150,
    height: 100,
  },
  modalButton: {
    marginTop: 10,
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  twoButtonView: {
    flexDirection: 'row',
  },
});

var CartItems = [
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
    name: "GODREJ Expert Liquid Hair Dye", 
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
class MyCart extends Component {
  static componentName = 'MyCart';

  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

  state = {
    animationType: 'none',
    modalVisible: false,
    transparent: false,
  };

  _setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  _setAnimationType = (type) => {
    this.setState({animationType: type});
  };

  _toggleTransparent = () => {
    this.setState({transparent: !this.state.transparent});
  };

  modalBackgroundStyle = {
    backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
  };

  innerContainerTransparentStyle = this.state.transparent ? {backgroundColor: '#fff', padding: 20} : null;
  
  activeButtonStyle = {
    backgroundColor: '#ddd'
  }

  showModal(){
    return (
      <View>
        <Modal
          animationType={this.state.animationType}
          transparent={this.state.transparent}
          visible={this.state.modalVisible}
          onRequestClose={() => this._setModalVisible(false)}>
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
              <Text>This modal was presented animation.</Text>
              <Text>It is currently displayed mode.</Text>
              <Button
                onPress={this._setModalVisible.bind(this, false)}
                style={styles.modalButton}>
                Close
              </Button>
            </View>
          </View>
        </Modal>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Animation Type</Text>
          <Button onPress={this._setAnimationType.bind(this, 'none')} style={this.state.animationType === 'none' ? activeButtonStyle : {}}>
            none
          </Button>
          <Button onPress={this._setAnimationType.bind(this, 'slide')} style={this.state.animationType === 'slide' ? activeButtonStyle : {}}>
            slide
          </Button>
          <Button onPress={this._setAnimationType.bind(this, 'fade')} style={this.state.animationType === 'fade' ? activeButtonStyle : {}}>
            fade
          </Button>
        </View>
      </View>
    );
  }

  renderItmes() {
    return CartItems.map(function(prod){
      const goDetailsPage = () => Actions.productsView({prod_id: prod.id});
      return(
        <ScrollView style={[AppStyles.container]}>
          <Card>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity activeOpacity={0.8} onPress={goDetailsPage}>
                <View style={{width: 200, height: 100, backgroundColor: 'white'}}>
                  <Image
                    source={require('@images/blank_product.jpg')}
                    style={[styles.favourite]}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} onPress={Actions.login}>
                <View style={{width: 500, height: 100, backgroundColor: 'white'}}>
                  <Text h3>{prod.name}</Text>
                  <Text>UOM: {prod.quantity}</Text>
                  <Text>Price: Rs. {prod.price}/-({prod.tax_type})</Text>
                </View>
              </TouchableOpacity>
              <View style={{width: 100, height: 100, backgroundColor: 'white'}}>
                <TouchableOpacity activeOpacity={0.8} onPress={Actions.productsList}>
                  <Icon name="trash" size={25} color="red" />
                </TouchableOpacity>
                <Spacer size={60} />
              </View>
            </View>
          </Card>
        </ScrollView>
      );
    });
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
        <ScrollView>
          {this.renderItmes()}
          {this.renderItmes()}
        </ScrollView>
        <Button
          title={'Continue Shopping'}
          onPress={Actions.productsGrid}
        />
        <Spacer size={10}/>
        <Button
          title={'CHECKOUT'}
          onPress={Actions.orderSummery}
        />
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default MyCart;
