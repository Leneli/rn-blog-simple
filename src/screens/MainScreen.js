import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../store/actions/post';
import PropTypes from 'prop-types';
import { PostsList } from '../components/PostsList';
import { ScreenPreloader } from '../components/ScreenPreloader';
import { ScreenEmpty } from '../components/ScreenEmpty';

const propTypes = {
  navigation: PropTypes.object.isRequired,
};

const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const allPosts = useSelector(state => state.post.allPosts);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  if (!allPosts) return <ScreenPreloader />;
  if (!allPosts.length) return <ScreenEmpty message="У вас пока нет ни одной заметки :(" />;
  return <PostsList navigation={navigation} data={allPosts} />;
};

MainScreen.propTypes = propTypes;

export default MainScreen;
