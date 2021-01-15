import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from '../screens/AboutScreen';
import CreateScreen from '../screens/CreateScreen';
import TabsNavigator from './TabsNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={TabsNavigator} options={{ title: 'Главная' }} />
    <Stack.Screen name="About" component={AboutScreen} />
    <Stack.Screen name="Create" component={CreateScreen} options={{ title: 'Новая заметка' }} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
