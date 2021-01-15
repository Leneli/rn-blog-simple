import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutStack from './Stacks/AboutStack';
import CreateStack from './Stacks/CreateStack';
import TabsNavigator from './TabsNavigator';
import { CLR_GREY, CLR_MAIN } from '../constants/colors';

const Drawer = createDrawerNavigator();

const drawerStyles = {
  activeBackgroundColor: CLR_GREY,
  activeTintColor: CLR_MAIN,
};

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home" drawerContentOptions={drawerStyles}>
    <Drawer.Screen name="Home" component={TabsNavigator} options={{ title: 'Главная' }} />
    <Drawer.Screen name="About" component={AboutStack} options={{ title: 'О приложении' }} />
    <Drawer.Screen name="Create" component={CreateStack} options={{ title: 'Новая заметка' }} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
