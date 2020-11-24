import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const PostScreen = ({}) => {
  return (
    <View style={styles.wrapper}>
      <Text>Post Screen</Text>
    </View>
  )
};

export default PostScreen;
