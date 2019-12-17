/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ListScreen from './components/ListScreen';
import DetailsScreen from './components/DetailsScreen';
import MapsScreen from './components/MapsScreen';

const RootStack = createStackNavigator(
  {
    List: ListScreen,
    Details: DetailsScreen,
    Maps: MapsScreen,
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#19AC52',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const RootContainer = createAppContainer(RootStack);

export default function App() {
  return (
    <RootContainer />
  )
}
