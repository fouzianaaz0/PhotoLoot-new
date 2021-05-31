import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import PhotoLootNav from './src/navigator/RootNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <PhotoLootNav />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
