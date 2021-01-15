import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptions, mainOptions } from '../options';
import CreateScreen from '../../screens/CreateScreen';

const Stack = createStackNavigator();

const options = ({ navigation }) => mainOptions({ navigation, title: 'Новая заметка', hasRightButton: false });

const CreateStack = () => (
  <Stack.Navigator headerMode="screen" screenOptions={screenOptions}>
    <Stack.Screen name="Create" component={CreateScreen} options={options} />
  </Stack.Navigator>
);

export default CreateStack;