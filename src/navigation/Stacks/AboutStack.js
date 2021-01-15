import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptions, mainOptions } from '../options';
import AboutScreen from '../../screens/AboutScreen';

const Stack = createStackNavigator();

const options = ({ navigation }) => mainOptions({ navigation, title: 'О приложении', hasRightButton: false });

const AboutStack = () => (
  <Stack.Navigator headerMode="screen" screenOptions={screenOptions}>
    <Stack.Screen name="About" component={AboutScreen} options={options} />
  </Stack.Navigator>
);

export default AboutStack;