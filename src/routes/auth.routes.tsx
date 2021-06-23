import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../Screens/Home';
import { SingIn } from '../Screens/SingIn';

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen
        name='SingIn'
        component={SingIn}
      />
      <Screen
        name='Home'
        component={Home}
      />
    </Navigator>
  );
}