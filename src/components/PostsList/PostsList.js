import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { PostPreview } from '../PostPreview';
import { styles } from './styles';

const propTypes = {
  navigation: PropTypes.object.isRequired,
  data: PropTypes.array,
};

const defaultProps = {
  data: [],
};

const PostsList = ({ navigation, data }) => {
  const keyExtractor = post => post?.id?.toString();
  const renderItem = ({ item }) => <PostPreview navigation={navigation} post={item} />;

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        windowSize={3}
      />
    </View>
  );
};

PostsList.propTypes = propTypes;
PostsList.defaultProps = defaultProps;

export default PostsList;
