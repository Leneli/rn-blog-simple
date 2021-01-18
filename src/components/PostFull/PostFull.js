import React from 'react';
import { ScrollView, View, Image, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import { TextComponent } from '../TextComponent';
import { styles } from './styles';
import { CLR_WARNING } from '../../constants/colors';

const propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  onDelete: PropTypes.func,
};

const defaultProps = {
  title: '',
  text: '',
  image: '',
  onDelete: () => {},
};

const PostFull = ({ title, text, image, onDelete }) => {
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      {!!image && (
        <View style={styles.imageBox}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      )}

      <View style={styles.content}>
        <View style={styles.titleBox}>
          <TextComponent fontFamily="Montserrat-Bold" style={styles.titleText}>{title}</TextComponent>
        </View>

        <View style={styles.messageBox}>
          <TextComponent fontFamily="Montserrat-Light" style={styles.messageText}>{text}</TextComponent>
        </View>
      </View>

      <View style={styles.buttonsBox}>
        <Button title="Удалить" color={CLR_WARNING} onPress={onDelete} />
      </View>
    </ScrollView>
  );
};

PostFull.propTypes = propTypes;
PostFull.defaultProps = defaultProps;

export default PostFull;
