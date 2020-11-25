import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import AboutScreen from '../screens/AboutScreen';
import BookmarkedScreen from '../screens/BookmarkedScreen';
import CreateScreen from '../screens/CreateScreen';
import PostScreen from '../screens/PostScreen';
import { CLR_FONT, CLR_MAIN, CLR_WHITE } from '../constants/colors';
import { Platform } from 'react-native';

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: Platform.select({ ios: CLR_WHITE, android: CLR_MAIN }),
    shadowColor: CLR_FONT,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    elevation: 3,
  },
  headerTitleStyle: {
    fontFamily: 'NerkoOne',
    fontSize: 30,
  },
  headerTintColor: Platform.select({ ios: CLR_MAIN, android: CLR_WHITE }),
};

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode="screen" screenOptions={screenOptions}>
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'My Notes' }} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Bookmarked" component={BookmarkedScreen} options={{ title: 'Bookmarks' }} />
        <Stack.Screen name="Create" component={CreateScreen} options={{ title: 'New Note' }} />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={({ route }) => ({ title: route.params.title || 'Note' })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;