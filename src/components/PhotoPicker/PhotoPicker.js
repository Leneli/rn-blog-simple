import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Button, Alert } from 'react-native';
import { CLR_GREY_BLUE } from '../../constants/colors';

const PHOTO_CONFIG = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  quality: 0.75,
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 350,
    marginTop: 10,
    marginBottom: 10,
  },
});

const propTypes = {
  onPickPhoto: PropTypes.func.isRequired,
};

const PhotoPicker = ({ onPickPhoto }) => {
  const [image, setImage] = useState(null);

  const handleTakePhoto = async () => {
    const hasPermission = await askPermission();
    if (!hasPermission) return;
    const photo = await ImagePicker.launchCameraAsync(PHOTO_CONFIG);
    setImage(photo.uri);
    onPickPhoto(photo.uri);
  };

  const handleLoadPhoto = async () => {
    const hasPermission = await askPermission();
    if (!hasPermission) return;
    const photo = await ImagePicker.launchImageLibraryAsync(PHOTO_CONFIG);
    setImage(photo.uri);
    onPickPhoto(photo.uri);
  };

  return (
    <View>
      <Button title="Сделать фото" color={CLR_GREY_BLUE} onPress={handleTakePhoto} />
      <Button title="Загрузить фото из библиотеки" color={CLR_GREY_BLUE} onPress={handleLoadPhoto} />
      {!!image && <Image source={{ uri: image }} style={styles.img} />}
    </View>
  );
};

PhotoPicker.propTypes = propTypes;

async function askPermission() {
  if (Platform.OS !== 'web') {
    const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
    const { status: cameraRollStatus } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (cameraStatus !== 'granted' || cameraRollStatus !== 'granted') {
      Alert.alert('Ошибка', 'Вы не дали права на доступ к фото!');
      return false;
    }

    return true;
  }
}

export default PhotoPicker;
