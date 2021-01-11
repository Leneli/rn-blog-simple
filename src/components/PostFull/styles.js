import { StyleSheet, Dimensions } from 'react-native';
import { CLR_WHITE_RGB } from '../../constants/colors';

const imageHeight = Dimensions.get('screen').width * 0.7;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: 30,
  },

  content: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },

  imageBox: {
    position: 'relative',
  },

  image: {
    height: imageHeight,
  },

  dateBox: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    paddingHorizontal: 10,
    backgroundColor: CLR_WHITE_RGB,
  },

  dateText: {
    marginTop: 15,
    marginBottom: 15,
    lineHeight: 16,
    fontSize: 14,
    fontWeight: 'bold',
  },

  titleBox: {
    marginTop: 15,
  },

  titleText: {
    fontSize: 24,
  },

  messageBox: {
    marginTop: 30,
  },

  messageText: {
    fontSize: 16,
  },

  buttonsBox: {
    marginTop: 45,
  },
});

export { styles };
