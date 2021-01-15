import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { postOptions } from '../options';
import PostScreen from '../../screens/PostScreen';

const Stack = createStackNavigator();

const CommonStack = () => (
  <>
    <Stack.Screen name="Post" component={PostScreen} options={postOptions} />
  </>
);

export default CommonStack;
