import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';
import { createPost } from '../store/actions/post';
import { PhotoPicker } from '../components/PhotoPicker';
import { CLR_MAIN, CLR_GREY_BLUE, CLR_FONT, CLR_WHITE } from '../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    paddingVertical: 25,
  },

  box: {
    marginBottom: 24,
  },

  input: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    fontSize: 16,
    borderWidth: 0.5,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderColor: CLR_GREY_BLUE,
    backgroundColor: CLR_WHITE,
    color: CLR_FONT,
  },

  multiline: {
    minHeight: 300,
  },

  image: {
    width: '100%',
    height: (Dimensions.get('screen').width - 30) * 0.7,
  },
});

const propTypes = {
  navigation: PropTypes.object.isRequired,
};

export const CreateScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const imgRef = useRef();
  const dispatch = useDispatch();
  const onKeyboardClose = () => Keyboard.dismiss();
  const handlePhotoPick = uri => imgRef.current = uri;

  const handleCreatePost = () => {
    dispatch(createPost({
      text,
      title: name,
      date: new Date().toJSON(),
      img: imgRef.current,
      booked: false
    }));
    setName('');
    setText('');
    imgRef.current = '';
    navigation.navigate('Main');
  };

  useEffect(() => {
    setButtonDisabled(!(name && text));
  }, [name, text]);

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <TouchableWithoutFeedback onPress={onKeyboardClose}>
        <>
          <View style={styles.box}>
            <TextInput
              style={styles.input}
              placeholder="Название поста"
              value={name}
              onChangeText={setName} />
          </View>

          <View style={styles.box}>
            <TextInput
              style={[styles.input, styles.multiline]}
              placeholder="Тест поста"
              value={text}
              onChangeText={setText}
              multiline />
          </View>

          <PhotoPicker onPickPhoto={handlePhotoPick} />

          <Button
            title="Создать заметку"
            color={CLR_MAIN}
            disabled={buttonDisabled}
            onPress={handleCreatePost} />
          </>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
};

CreateScreen.propTypes = propTypes;

export default CreateScreen;
