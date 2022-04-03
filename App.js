import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Weatheryy'
    },
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }

  }
)

export default createAppContainer(navigator);

