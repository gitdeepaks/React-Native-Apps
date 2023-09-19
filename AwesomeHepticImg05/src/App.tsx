import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import {PropsWithChildren, useState} from 'react';
import React from 'react';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{imgUrl: ImageSourcePropType}>;

const Dice = ({imgUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image source={imgUrl} style={styles.diceImage} />
    </View>
  );
};

const App = (): JSX.Element => {
  const [diceImge, setDiceImge] = useState<ImageSourcePropType>(DiceOne); //TODO: set initial state

  const rollDice = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    switch (randomNum) {
      case 1:
        setDiceImge(DiceOne);
        break;
      case 2:
        setDiceImge(DiceTwo);
        break;
      case 3:
        setDiceImge(DiceThree);
        break;
      case 4:
        setDiceImge(DiceFour);
        break;
      case 5:
        setDiceImge(DiceFive);
        break;
      case 6:
        setDiceImge(DiceSix);
        break;
      default:
        setDiceImge(DiceOne);
        break;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Dice imgUrl={diceImge} />
        <Pressable onPress={rollDice} style={styles.rollDiceBtn}>
          <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceImage: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  rollDiceBtn: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: '#68a0cf',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  rollDiceBtnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
