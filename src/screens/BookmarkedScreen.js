import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const BookmarkedScreen = ({}) => {
  return (
    <View style={styles.wrapper}>
      <Text>Bookmarked Screen</Text>
    </View>
  )
};

export default BookmarkedScreen;
