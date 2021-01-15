import React from 'react';
import { IconNav } from '../../components/NavigateComponents';

const mainOptions = ({ navigation }) => ({
  title: 'Мои заметки',
  headerLeft: () => <IconNav iconName="ios-menu" position="left" onPress={() => navigation.openDrawer()} />,
  headerRight: () => <IconNav iconName="ios-camera" position="right" onPress={() => {}} />,
});

export default mainOptions;
