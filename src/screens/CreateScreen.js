import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const CreateScreen = ({}) => {
  return (
    <View style={styles.wrapper}>
      <Text>Create Screen</Text>
    </View>
  )
};

export default CreateScreen;
