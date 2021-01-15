import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptions, bookedOptions } from '../options';
import BookmarkedScreen from '../../screens/BookmarkedScreen';
import CommonStack from './CommonStack';

const Stack = createStackNavigator();

const BookedStack = () => (
  <Stack.Navigator headerMode="screen" screenOptions={screenOptions}>
    <Stack.Screen name="Bookmarked" component={BookmarkedScreen} options={bookedOptions} />
    {CommonStack()}
  </Stack.Navigator>
);

export default BookedStack;
