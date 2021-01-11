import React from 'react';
import { Pressable, View, Image, Text } from 'react-native';
import { TextComponent } from '../TextComponent';
import PropTypes from 'prop-types';
import styles from './styles';

const propTypes = {
  navigation: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

const PostPreview = ({ navigation, post }) => {
  const { id, img, title, text, date, booked } = post;
  const onPress = () => {
    navigation.navigate('Post', { title: `Пост от ${new Date(date).toLocaleDateString()}`, id, booked });
  };

  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        style={styles.container}>
        {booked && <View style={styles.booked}></View>}
        {!!img && <Image source={{ uri: img }} style={styles.image} />}
        <View style={styles.header}>
          <TextComponent fontFamily="Montserrat-Bold" style={styles.nameText}>{title}</TextComponent>
          <Text style={styles.dateText}>{new Date(date).toLocaleDateString()}</Text>
        </View>
        <Text style={styles.descText}>{text}</Text>
      </Pressable>
    </View>
  );
};

PostPreview.propTypes = propTypes;

export default PostPreview;
