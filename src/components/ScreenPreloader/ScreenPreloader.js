import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { CLR_MAIN } from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ScreenPreloader = () => (
  <View style={styles.wrapper}>
    <ActivityIndicator size="large" color={CLR_MAIN} />
  </View>
);

export default ScreenPreloader;
