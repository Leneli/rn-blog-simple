import React from 'react';
import PropTypes from 'prop-types';
import { PostsList } from '../components/PostsList';
import { DATA } from '../data'; // FIXME: test data

const propTypes = {
  navigation: PropTypes.object.isRequired,
};

const BookmarkedScreen = ({ navigation }) => {
  const bookedPosts = DATA.filter(post => post.booked);
  return <PostsList navigation={navigation} data={bookedPosts} />;
};

BookmarkedScreen.propTypes = propTypes;

export default BookmarkedScreen;
