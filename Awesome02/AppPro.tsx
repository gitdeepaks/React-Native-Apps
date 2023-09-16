import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElivatedCards from './components/ElivatedCards';

const AppPro = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElivatedCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppPro;
