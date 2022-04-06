import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { ScrollView, View, Image, Text } from 'react-native';
import Img from '../assets/svgs/login.svg';



const Login = () => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')



  return (
    <ScrollView>
    <View style={{flex: 3, flexDirection: 'column', justifyContent: 'center', padding:15}}>

  <Img width={300} height={300} />
  <Text style={{fontSize: 49, fontWeight: 'bold', color: 'green'}}> Login </Text>
    <TextInput
      type="flat"
      label="Email"
      value={mail}
      mode= {'outlined'}
      onChangeText={mail => setMail(mail)}
    />

  <TextInput
      label="password"
      value={password}
      secureTextEntry
      mode= {'outlined'}
      onChangeText={password => setPassword(password)}
    />
    <Text style={{paddingTop: 6, color: 'green', display: 'flex'}}>forgot password?</Text>
    <Button color='green'> login with google</Button>
    </View>
    </ScrollView>

  );
}

export default Login
