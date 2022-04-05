import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { ScrollView, View, Image, Text } from 'react-native';




const SignUp = () => {
  const [username, setUsername] = useState('')  
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
 
  

  return (
    <ScrollView>
    <View style={{flex: 3, flexDirection: 'column', justifyContent: 'center', padding:15}}>
  <Text style={{fontSize: 49, fontWeight: 'bold', color: 'green'}}> SignUp </Text>
    <TextInput
      label="Name"
      value={username}
      mode= {'outlined'}
      onChangeText={username => setMail(username)}
    />
  <Text style={{fontSize: 49, fontWeight: 'bold', color: 'green'}}> SignUp </Text>
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
    </ScrollView>
     
  );
}

export default SignUp