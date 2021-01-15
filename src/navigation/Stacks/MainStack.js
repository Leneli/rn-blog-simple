import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptions, mainOptions } from '../options';
import MainScreen from '../../screens/MainScreen';
import CommonStack from './CommonStack';

const Stack = createStackNavigator();

const options = ({ navigation }) => mainOptions({ navigation, title: 'Мои заметки' });

const MainStack = () => (
  <Stack.Navigator headerMode="screen" screenOptions={screenOptions}>
    <Stack.Screen name="Main" component={MainScreen} options={options} />
    {CommonStack()}
  </Stack.Navigator>
);

export default MainStack;
