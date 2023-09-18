import React, {useState} from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [color, setColor] = useState('#000000');

  const handleColor = () => {
    const hexRange = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setColor(newColor);
  };
  return (
    <>
      <StatusBar backgroundColor={color} />
      <View style={[styles.container, {backgroundColor: color}]}>
        <TouchableOpacity onPress={handleColor}>
          <View style={styles.actionButtion}>
            <Text style={styles.btnText}>Button</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtion: {
    borderRadius: 12,
    backgroundColor: '#1b286a',
    paddingVertical: 10,
    paddingHorizontal: 42,
  },
  btnText: {
    fontSize: 24,
    color: '#fff',
    textTransform: 'uppercase',
  },
});
