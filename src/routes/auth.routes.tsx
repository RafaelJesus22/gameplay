import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../Screens/Home/Home';
import { SingIn } from '../Screens/SingIn/SingIn';
import { AppointmentDetails } from '../Screens/AppointmentDetails/AppointmentDetails';
import { AppointmentCreate } from '../Screens/AppointmentCreate/AppointmentCreate';

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
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
      <Screen
        name='AppointmentDetails'
        component={AppointmentDetails}
      />
      <Screen
        name='AppointmentCreate'
        component={AppointmentCreate}
      />
    </Navigator>
  );
}