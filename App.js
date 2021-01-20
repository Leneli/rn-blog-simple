import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import AppRouter from './src/navigation/AppNavigation';
import { bootstrap } from './src/bootstrap';
import store from './src/store';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const onReady = () => setLoaded(true);
  const onError = error => console.log('AppLoading error', error);

  if (!loaded) return <AppLoading startAsync={bootstrap} onFinish={onReady} onError={onError} />;

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <AppRouter />
    </Provider>
  );
}
