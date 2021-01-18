import React from 'react';
import { IconNav } from '../../components/NavigateComponents';

const postOptions = ({ route }) => ({
  title: route?.params?.title || 'Заметка',
  headerBackTitleVisible: false,
  headerRight: () => (
    <IconNav
      position="right"
      iconName={route?.params?.rightNavIconName || 'star-outline'}
      onPress={route.params.onRightNavIconPress}
    />
  ),
});

export default postOptions;
