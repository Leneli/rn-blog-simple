import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { PostFull } from '../components/PostFull';
import { DATA } from '../data';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export const PostScreen = ({ navigation, route }) => {
  const [starIcon, setStarIcon] = useState(route?.params?.booked ? 'star' : 'star-outline');
  const postId = route?.params?.id;
  const postData = DATA.find(post => post.id === postId) || {};
  const { title, text, img, booked } = postData;

  const handleRightNavIconPress = () => {
    console.log('>>> starIcon (0)', starIcon);
    setStarIcon(starIcon === 'star' ? 'star-outline' : 'star');
    console.log('>>> Star press!');
    console.log('>>> starIcon (1)', starIcon);
  };

  useEffect(() => {
    console.log('>>> starIcon (2)', starIcon);
    navigation.setParams({
      rightNavIconName: starIcon,
      onRightNavIconPress: handleRightNavIconPress,
    });
  }, []);

  useEffect(() => {
    console.log('>>> starIcon (3)', starIcon);
    navigation.setParams({
      rightNavIconName: starIcon,
    });
  }, [starIcon]);

  const handleDelete = () => {
    Alert.alert(
      'Удаление',
      'Вы уверены, что хотите удалить пост?',
      [
        {
          text: 'Отменить'
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {},
        },
      ],
    );
  };

  return (
    <PostFull
      title={title}
      text={text}
      image={img}
      isBooked={booked}
      onDelete={handleDelete}
    />
  );
};

PostScreen.propTypes = propTypes;

export default PostScreen;
