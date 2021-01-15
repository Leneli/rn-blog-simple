import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { IconTab } from '../components/NavigateComponents';
import MainStack from './Stacks/MainStack';
import BookedStack from './Stacks/BookedStack';

const Tabs = Platform.OS === 'ios' ? createBottomTabNavigator() : createMaterialBottomTabNavigator();

const barStyles = { backgroundColor: 'orange' };
const tabBarStyles = {
  activeTintColor: 'orange',
  inactiveTintColor: 'blue',
  labelStyle: { fontSize: 13 },
};

const mainStackOptions = {
  title: 'Заметки',
  tabBarIcon: info => <IconTab iconName="star" color={info?.color} />,
};

const bookedStackOptions = {
  title: 'Закладки',
  tabBarIcon: info => <IconTab iconName="star" color={info?.color} />,
};

const TabsNavigator = () => (
  <Tabs.Navigator tabBarOptions={tabBarStyles} barStyle={barStyles} shifting>
    <Tabs.Screen name="Main" component={MainStack} options={mainStackOptions} />
    <Tabs.Screen name="Bookmarked" component={BookedStack} options={bookedStackOptions} />
  </Tabs.Navigator>
);

export default TabsNavigator;
