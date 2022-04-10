import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { ScrollView, View, Text } from 'react-native';
import Img from '../assets/svgs/auth.svg';



const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('')  
  const [mail, setMail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
 
  return (
    <ScrollView>
    <View style={{backgroundColor: "white", flex: 3, flexDirection: 'column', justifyContent: 'center', padding:15}}>
    <Img width={300} height={200} />
  <Text style={{fontSize: 49, fontWeight: 'bold', color: 'green'}}> SignUp </Text>
    <TextInput
      label="Name"
      value={username}
      mode= {'flat'}
      activeUnderlineColor="green"
      backgroundColor="white"
      onChangeText={setUsername => setUsername(username)}
    />
    <TextInput
      label="Email"
      value={mail}
      mode= {'flat'}
      activeUnderlineColor="green"
      backgroundColor="white"
      onChangeText={mail => setMail(mail)}
    />

  <TextInput
      label="password"
      value={password1}
      secureTextEntry
      mode= {'flat'}
      activeUnderlineColor="green"
      backgroundColor="white"
      onChangeText={password1 => setPassword1(password1)}
    />

<TextInput
      label="repeat password"
      value={password2}
      secureTextEntry
      mode= {'flat'}
      activeUnderlineColor="green"
      backgroundColor="white"
      onChangeText={password2 => setPassword2(password2)}
    />
    <Button style={{margin: 20}} mode='outlined' color='green'> login with google</Button>
    <Button style={{margin: 20, backgroundColor: "green",}} mode='contained'> Sign Up </Button>
    <Text
    onPress={() => {navigation.navigate('Login')}}
    style={{textAlign: "center",}}>Have an account? <Text style={{color: "green"}}>Login</Text> </Text>
    </View>
    </ScrollView>
     
  );
}

export default SignUp