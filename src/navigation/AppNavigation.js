import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';
import AboutScreen from '../screens/AboutScreen';
import BookmarkedScreen from '../screens/BookmarkedScreen';
import CreateScreen from '../screens/CreateScreen';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Bookmarked" component={BookmarkedScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;