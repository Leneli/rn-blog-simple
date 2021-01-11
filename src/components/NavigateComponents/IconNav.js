import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CLR_MAIN } from '../../constants/colors';

const propTypes = {
  iconName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const IconNav = ({ iconName, position, onPress }) => {
  const getStyles = ({ pressed }) => {
    const styles = StyleSheet.create({
      wrapper: {
        paddingRight: position !== 'left' ? 10 : 0,
        paddingLeft: position !== 'right' ? 10 : 0,
        opacity: pressed ? 0.5 : 1,
      },
    });
  
    return styles.wrapper;
  };

  return (
    <Pressable style={getStyles} onPress={onPress}>
      <Ionicons name={iconName} size={28} color={CLR_MAIN} />
    </Pressable>
  );
};

IconNav.propTypes = propTypes;

export default IconNav;
