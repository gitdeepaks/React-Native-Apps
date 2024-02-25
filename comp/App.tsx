import {
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  Switch,
} from 'react-native';
import React from 'react';

const App = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = React.useState(true);
  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput
          value={email}
          keyboardType="email-address"
          style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10}}
          placeholder="You can type in me"
          onChange={e => {
            setEmail(e.nativeEvent.text);
          }}
        />
        <TextInput
          value={password}
          secureTextEntry={true}
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            top: 10,
          }}
          placeholder="Password"
          onChange={e => {
            setPassword(e.nativeEvent.text);
          }}
        />

        <Button
          title={'submit'}
          disabled={!email || !password}
          onPress={() => {
            console.log('email:', email, 'password:', password);
          }}
        />
        <Switch
          value={shouldKeepLoggedIn}
          onValueChange={value => setShouldKeepLoggedIn(value)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
