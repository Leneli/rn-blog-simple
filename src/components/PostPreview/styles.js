import { StyleSheet } from 'react-native';
import { CLR_WHITE, CLR_FONT, CLR_WARNING } from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    backgroundColor: CLR_WHITE,
    elevation: 3,
    shadowColor: CLR_FONT,
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },

  container: {
    position: 'relative',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 15,
    overflow: 'hidden',
  },

  image: {
    height: 300,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  nameText: {
    fontSize: 20,
  },

  dateText: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'right',
    fontSize: 14,
    color: CLR_FONT,
    opacity: 0.8,
  },

  descText: {
    fontSize: 14,
    lineHeight: 18,
  },

  booked: {
    position: 'absolute',
    width: 90,
    height: 90,
    top: 0,
    right: 0,
    backgroundColor: CLR_WARNING,
    transform: [{ rotate: '45deg' }, { translateX: 0 }, { translateY: -65 }],
    elevation: 2,
    shadowColor: CLR_FONT,
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    zIndex: 100,
  },
});

export default styles;
