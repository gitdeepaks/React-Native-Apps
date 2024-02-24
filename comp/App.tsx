import {SafeAreaView, TextInput} from 'react-native';
import React from 'react';

const App = () => {
  const [textValue, setTextValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  return (
    <SafeAreaView>
      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        value={textValue}
        onChangeText={text => {
          console.log('Text Value: ', text);
          setTextValue(text);
        }}
        returnKeyType="next"
        autoFocus={true}
        placeholder={'Enter your text here...'}
      />

      <TextInput
        style={{
          borderWidth: 1,
          top: 10,
          bottom: 10,
          padding: 10,
          borderRadius: 4,
        }}
        value={emailValue}
        onChangeText={text => {
          console.log('Text Value: ', text);
          setEmailValue(text);
        }}
        returnKeyType={'next'}
        keyboardType="email-address"
        autoFocus={true}
        placeholder={'Enter your text here...'}
      />

      <TextInput
        style={{borderWidth: 1, top: 10, padding: 10, borderRadius: 4}}
        value={passwordValue}
        onChangeText={text => {
          console.log('Text Value: ', text);
          setPasswordValue(text);
        }}
        returnKeyType="done"
        keyboardType={'phone-pad'}
        secureTextEntry={true}
        autoFocus={true}
        placeholder={'Enter your text passeord...'}
      />
    </SafeAreaView>
  );
};

export default App;
