import React from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { CLR_MAIN } from '../../constants/colors';

const propTypes = {
  iconName: PropTypes.string.isRequired,
  color: PropTypes.string,
};

const defaultProps = {
  color: CLR_MAIN,
};

const IconTab = ({ iconName, color }) => <Ionicons name={iconName} size={20} color={color} />;

IconTab.propTypes = propTypes;
IconTab.defaultProps = defaultProps;

export default IconTab;
