import React from 'react';
import PropTypes from 'prop-types';
import { PostsList } from '../components/PostsList';
import { DATA } from '../data'; // FIXME: test data

const propTypes = {
  navigation: PropTypes.object.isRequired,
};

const MainScreen = ({ navigation }) => <PostsList navigation={navigation} data={DATA} />;

MainScreen.propTypes = propTypes;

export default MainScreen;
