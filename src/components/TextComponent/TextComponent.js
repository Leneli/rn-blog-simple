import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string,
  fontFamily: PropTypes.string,
  weight: PropTypes.oneOf(['100', '200', '300', '400', '500', '600', '700', '800', '900', 'normal', 'bold']),
  italic: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const defaultProps = {
  children: null,
  fontFamily: '',
  weight: 'normal',
  italic: false,
  style: {},
};

const TextComponent = ({ children, fontFamily, weight, italic, style }) => {
  if (!children) return null;

  const styles = StyleSheet.create({
    text: {
      fontFamily,
      fontWeight: weight,
      fontStyle: italic ? 'italic' : 'normal',
    },
  });

  return <Text style={[styles.text, style]}>{children}</Text>
};

TextComponent.propTypes = propTypes;
TextComponent.defaultProps = defaultProps;

export default TextComponent;
