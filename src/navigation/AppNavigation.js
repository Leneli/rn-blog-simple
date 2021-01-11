import 'react-native-gesture-handler';
import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { IconNav, IconTab } from '../components/NavigateComponents';
import MainScreen from '../screens/MainScreen';
import AboutScreen from '../screens/AboutScreen';
import BookmarkedScreen from '../screens/BookmarkedScreen';
import CreateScreen from '../screens/CreateScreen';
import PostScreen from '../screens/PostScreen';
import { CLR_FONT, CLR_MAIN, CLR_WHITE } from '../constants/colors';

const Stack = createStackNavigator();
const Tabs = Platform.OS === 'ios' ? createBottomTabNavigator() : createMaterialBottomTabNavigator();

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

const bookedOprions = {
  title: 'Закладки',
  headerLeft: () => <IconNav iconName="ios-menu" position="left" onPress={() => {}} />,
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

const CommonStack = () => (
  <>
    <Stack.Screen name="Post" component={PostScreen} options={postOptions} />
  </>
);

const MainStack = () => (
  <Stack.Navigator initialRouteName="Main" headerMode="screen" screenOptions={screenOptions}>
    <Stack.Screen name="Main" component={MainScreen} options={mainOptions} />
    <Stack.Screen name="About" component={AboutScreen} />
    <Stack.Screen name="Create" component={CreateScreen} options={{ title: 'Новая заметка' }} />
    {CommonStack()}
  </Stack.Navigator>
);

const BookedStack = () => (
  <Stack.Navigator initialRouteName="Bookmarked" headerMode="screen" screenOptions={screenOptions}>
    <Stack.Screen name="Bookmarked" component={BookmarkedScreen} options={bookedOprions} />
    {CommonStack()}
  </Stack.Navigator>
);

const AppTabs = () => (
  <Tabs.Navigator
    shifting={true}
    tabBarOptions={{
      activeTintColor: 'orange',
      inactiveTintColor: 'blue',
      labelStyle: { fontSize: 13 },
    }}
    barStyle={{ backgroundColor: 'orange' }}
  >
    <Tabs.Screen name="Main" component={MainStack} options={{
      title: 'Заметки',
      tabBarIcon: info => <IconTab iconName="star" color={info?.color} />,
    }} />
    <Tabs.Screen name="Bookmarked" component={BookedStack} options={{
      title: 'Закладки',
      tabBarIcon: info => <IconTab iconName="star" color={info?.color} />,
    }} />
  </Tabs.Navigator>
);

const AppRouter = () => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
};

export default AppRouter;