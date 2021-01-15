import React from 'react';
import { IconNav } from '../../components/NavigateComponents';

const mainOptions = ({ navigation, title, hasRightButton = true }) => ({
  title,
  headerLeft: () => <IconNav iconName="ios-menu" position="left" onPress={() => navigation.openDrawer()} />,
  headerRight: () =>
    hasRightButton ? <IconNav iconName="ios-camera" position="right" onPress={() => {}} /> : null,
});

export default mainOptions;
