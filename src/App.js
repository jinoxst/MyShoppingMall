import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainItemList from './container/MainItemList';
import ItemDetail from './container/ItemDetail';

const App = StackNavigator({
  MainItemList: { screen: MainItemList },
  ItemDetail:   { screen: ItemDetail },
});

AppRegistry.registerComponent('MyShoppingMall', () => App);