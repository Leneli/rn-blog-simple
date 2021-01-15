import { Platform } from 'react-native';
import { CLR_FONT, CLR_MAIN, CLR_WHITE } from '../../constants/colors';

const screenOptions = {
  headerStyle: {
    backgroundColor: Platform.select({ ios: CLR_WHITE, android: CLR_MAIN }),
    shadowColor: CLR_FONT,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    elevation: 3,
  },
  headerTitleStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
  headerTintColor: Platform.select({ ios: CLR_MAIN, android: CLR_WHITE }),
};

export default screenOptions;
