import * as Font from 'expo-font';
import DB from './db';

export async function bootstrap () {
  try {
    await Font.loadAsync({
      'Montserrat-Bold': require('../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
      'Montserrat-BoldItalic': require('../assets/fonts/Montserrat/Montserrat-BoldItalic.ttf'),
      'Montserrat-Italic': require('../assets/fonts/Montserrat/Montserrat-Italic.ttf'),
      'Montserrat-Light': require('../assets/fonts/Montserrat/Montserrat-Light.ttf'),
      'Montserrat-LightItalic': require('../assets/fonts/Montserrat/Montserrat-LightItalic.ttf'),
      'Montserrat-Regular': require('../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    });
    await DB.init();
  } catch (error) {
    console.warn('Bootstrap error', error);
  }
}
