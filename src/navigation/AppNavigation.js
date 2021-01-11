import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconNavPhoto, IconNav } from '../components/NavigateComponents';
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
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
  headerTintColor: Platform.select({ ios: CLR_MAIN, android: CLR_WHITE }),
};

const mainOptions = {
  title: 'Мои заметки',
  headerTitleStyle: {
    fontSize: 28,
    fontFamily: 'Montserrat-Bold',
  },
  headerLeft: () => <IconNav iconName="ios-menu" position="left" onPress={() => {}} />,
  headerRight: () => <IconNav iconName="ios-camera" position="right" onPress={() => {}} />,
};

const postOptions = ({ route }) => ({
  title: route?.params?.title || 'Заметка',
  headerBackTitleVisible: false,
  headerRight: () => (
    <IconNav
      position="right"
      iconName={route?.params?.rightNavIconName || 'star-outline'}
      onPress={route?.params?.onRightNavIconPress}
    />
  ),
});

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode="screen" screenOptions={screenOptions}>
        <Stack.Screen name="Main" component={MainScreen} options={mainOptions} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Bookmarked" component={BookmarkedScreen} options={{ title: 'Закладки' }} />
        <Stack.Screen name="Create" component={CreateScreen} options={{ title: 'Новая заметка' }} />
        <Stack.Screen name="Post" component={PostScreen} options={postOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;