import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElivatedCards from './components/ElivatedCards';
import FancyCard from './components/FancyCard';

const AppPro = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElivatedCards />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppPro;
