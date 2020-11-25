import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { TextComponent } from '../TextComponent';
import PropTypes from 'prop-types';
import styles from './styles';

const propTypes = {
  navigation: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

const PostPreview = ({ navigation, post }) => {
  const { id, img, text, date, booked } = post;
  const onPress = () => navigation.navigate('Post', { title: `Note #${id}` });

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.container}>
        {booked && <View style={styles.booked}></View>}
        {!!img && <Image source={{ uri: img }} style={styles.image} />}
        <View style={styles.header}>
          <TextComponent fontFamily="NerkoOne" style={styles.nameText}>{`#${id}`}</TextComponent>
          <Text style={styles.dateText}>{new Date(date).toLocaleDateString()}</Text>
        </View>
        <Text style={styles.descText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

PostPreview.propTypes = propTypes;

export default PostPreview;
