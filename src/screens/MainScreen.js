import React from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import PropTypes from 'prop-types';
import PostPreview from '../components/PostPreview/PostPreview';
import { DATA } from '../data'; // FIXME: test data

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  container: {
    marginTop: 10,
    paddingBottom: 50,
  },
});

const propTypes = {
  navigation: PropTypes.object.isRequired,
};

const MainScreen = ({ navigation }) => {
  const keyExtractor = post => post.id.toString();
  const renderItem = ({ item }) => <PostPreview navigation={navigation} post={item} />;

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        windowSize={3}
      />

      {/* <Button title="to About" onPress={() => navigation.navigate('About')} />
      <Button title="to Bookmarked" onPress={() => navigation.navigate('Bookmarked')} />
      <Button title="to Create" onPress={() => navigation.navigate('Create')} />
      <Button title="to Post" onPress={() => navigation.navigate('Post', { title: 'Post #33' })} /> */}
    </View>
  )
};

MainScreen.propTypes = propTypes;

export default MainScreen;
