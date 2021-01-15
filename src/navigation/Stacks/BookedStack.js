import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptions, mainOptions } from '../options';
import BookmarkedScreen from '../../screens/BookmarkedScreen';
import CommonStack from './CommonStack';

const Stack = createStackNavigator();

const options = ({ navigation }) => mainOptions({ navigation, title: 'Закладки', hasRightButton: false });

const BookedStack = () => (
  <Stack.Navigator headerMode="screen" screenOptions={screenOptions}>
    <Stack.Screen name="Bookmarked" component={BookmarkedScreen} options={options} />
    {CommonStack()}
  </Stack.Navigator>
);

export default BookedStack;
