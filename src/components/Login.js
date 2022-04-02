import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { ScrollView, View, Image, Text } from 'react-native';
import img from '../assets/svgs/login.svg';


const Login = () => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  

  return (
    
    <View style={{flex: 3, flexDirection: 'column', justifyContent: 'center', padding:15}}>

  {/* <Image source={img} style={{width: 40}} /> */}
  <Text style={{fontSize: 49, fontWeight: 'bold', color: 'green'}}> Login </Text>
    <TextInput
      label="Email"
      value={mail}
      mode= {'outlined'}
      onChangeText={mail => setMail(mail)}
    />

  <TextInput
      label="password"
      value={password}
      type='password'
      mode= {'outlined'}
      onChangeText={password => setPassword(password)}
    />
    <Text style={{paddingTop: 6, color: 'green', display: 'flex'}}>forgot password?</Text>
    <Button color='green'> login with google</Button>
    </View>
    
     
  );
}

export default Login