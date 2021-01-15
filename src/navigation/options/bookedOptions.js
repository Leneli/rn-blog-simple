import React from 'react';
import { IconNav } from '../../components/NavigateComponents';

const bookedOptions = ({ navigation }) => ({
  title: 'Закладки',
  headerLeft: () => <IconNav iconName="ios-menu" position="left" onPress={() => navigation.openDrawer()} />,
});

export default bookedOptions;
