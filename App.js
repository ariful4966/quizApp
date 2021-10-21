//import Library
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './navigation';

// create a component
const App = () => {
  return (
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

//make this component available to the app
export default App;
