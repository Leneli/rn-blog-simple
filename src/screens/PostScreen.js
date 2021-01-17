import React, { useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { PostFull } from '../components/PostFull';
import { removePost, toggleBookmark } from '../store/actions/post';

const propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export const PostScreen = ({ navigation, route }) => {
  const allPosts = useSelector(state => state?.post?.allPosts) || [];
  const postId = route?.params?.id;
  const postData = allPosts.find(post => post.id === postId) || {};
  const { title, text, img } = postData;
  const isBooked = useSelector(state => state?.post?.bookedPosts.some(post => post.id === postId));
  const dispatch = useDispatch();
  const handleToggleBookmark = useCallback(() => dispatch(toggleBookmark(postId)), [dispatch, postId]);

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
          onPress: () => {
            dispatch(removePost(postId));
            navigation.goBack();
          },
        },
      ],
    );
  };

  useEffect(() => {
    navigation.setParams({
      rightNavIconName: isBooked ? 'star' : 'star-outline',
    });
  }, [isBooked]);

  useEffect(() => {
    navigation.setParams({
      onRightNavIconPress: handleToggleBookmark,
    });
  }, [handleToggleBookmark]);

  return (
    <PostFull
      title={title}
      text={text}
      image={img}
      onDelete={handleDelete}
    />
  );
};

PostScreen.propTypes = propTypes;

export default PostScreen;
