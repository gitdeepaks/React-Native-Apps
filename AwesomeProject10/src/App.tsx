import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import Login from './screens/Login';

const App = () => {
  return (
    <SafeAreaView>
      <Home />
      <SignUp />
      <Login />
    </SafeAreaView>
  );
};

export default App;
