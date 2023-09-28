import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {setUpPlayer, addTracks} from '../musicLayerServices';

function App(): JSX.Element {
  const [isPlayerREady, setIsPlayerReady] = useState(false);

  async function setUpPlayer() {
    let isSetUp = await setUpPlayer();

    if (isSetUp) {
      await addTracks();
    }

    setIsPlayerReady(isSetUp);
  }

  useEffect(() => {
    setUpPlayer();
  }, []);

  if (!isPlayerREady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  // return (
  //   <SafeAreaView>
  //     <StatusBar />
  //     <Text>Test</Text>
  //   </SafeAreaView>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
