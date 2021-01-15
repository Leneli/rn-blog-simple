import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    marginVertical: 15,
    lineHeight: 20,
  },

  bold: {
    fontWeight: 'bold',
  },
});

const AboutScreen = ({}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Простое приложение для ведения личных заметок</Text>
      <Text style={styles.text}>Версия <Text style={styles.bold}>1.0.0</Text></Text>
    </View>
  )
};

export default AboutScreen;
