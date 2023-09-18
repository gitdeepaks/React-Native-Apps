import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text style={styles.main}>App There</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    color: '#da3be0',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
