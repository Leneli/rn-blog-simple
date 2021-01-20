import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { PostsList } from '../components/PostsList';
import { ScreenPreloader } from '../components/ScreenPreloader';
import { ScreenEmpty } from '../components/ScreenEmpty';

const propTypes = {
  navigation: PropTypes.object.isRequired,
};

const BookmarkedScreen = ({ navigation }) => {
  const bookedPosts = useSelector(state => state?.post?.bookedPosts);

  if (!bookedPosts) return <ScreenPreloader />;
  if (!bookedPosts.length) return <ScreenEmpty message="У вас пока нет закладок :(" />;
  return <PostsList navigation={navigation} data={bookedPosts} />;
};

BookmarkedScreen.propTypes = propTypes;

export default BookmarkedScreen;
