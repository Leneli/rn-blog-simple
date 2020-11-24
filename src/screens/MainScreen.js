import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Text>Main Screen</Text>

      <Button title="to About" onPress={() => navigation.navigate('About')} />
      <Button title="to Bookmarked" onPress={() => navigation.navigate('Bookmarked')} />
      <Button title="to Create" onPress={() => navigation.navigate('Create')} />
      <Button title="to Post" onPress={() => navigation.navigate('Post')} />
    </View>
  )
};

export default MainScreen;
