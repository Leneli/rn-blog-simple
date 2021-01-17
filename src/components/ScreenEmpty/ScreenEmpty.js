import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { TextComponent } from '../TextComponent';
import { CLR_MAIN } from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    lineHeight: 26,
    textAlign: 'center',
    color: CLR_MAIN,
  },
});

const propTypes = {
  message: PropTypes.string.isRequired,
};

const ScreenEmpty = ({ message }) => (
  <View style={styles.wrapper}>
    <TextComponent fontFamily="Montserrat-Regular" style={styles.text}>{message}</TextComponent>
  </View>
);

ScreenEmpty.propTypes = propTypes;

export default ScreenEmpty;
