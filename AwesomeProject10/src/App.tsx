import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from './types';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import Login from './screens/Login';

const App = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList, 'SignUp'>>();
  const route = useRoute<RouteProp<AuthStackParamList, 'SignUp'>>();

  return (
    <SafeAreaView style={styles.container}>
      <SignUp navigation={navigation} route={route} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
