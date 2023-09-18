import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

//Form Validation
import * as Yup from 'yup';

const passwordScema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'should be min 4 characters')
    .max(8, 'should be max 8 characters')
    .required('Length is required'),
});
const App = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [isLowerCase, setIsLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setsymbol] = useState(false);

  const generatedPasswordString = (passwordLength: number) => {
    let charList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digists = '0123456789';
    const symbols = '!@#$%^&*()_+';

    if (upperCase) {
      charList += upperCaseChars;
    }

    if (isLowerCase) {
      charList += lowerCaseChars;
    }

    if (number) {
      charList += number;
    }
    if (symbol) {
      charList += symbols;
    }

    const passwerdResult = generatePassword(charList, passwordLength);

    setPassword(passwerdResult);
    setIsPassGenerated(true);
  };

  const generatePassword = (char: string, passLength: number) => {
    let res = '';
    for (let i = 0; i < passLength; i++) {
      const charIndex = Math.floor(Math.random() * char.length);
      char += char.charAt(charIndex);
    }
    return res;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPassGenerated(false);
    setIsLowerCase(false);
    setUpperCase(false);
    setsymbol(false);
    setNumber(false);
  };

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
