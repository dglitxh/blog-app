import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';


const Login = () => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  

  return (
    <View>
    <TextInput
      label="Email"
      value={mail}
      mode= {'outlined'}
      onChangeText={mail => setMail(mail)}
    />

  <TextInput
      label="password"
      value={password}
      mode= {'outlined'}
      onChangeText={password => setPassword(password)}
    />
    </View>
  );
}

export default Login