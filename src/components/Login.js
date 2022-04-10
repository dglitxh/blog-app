import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Text, ScrollView } from 'react-native';
import Img from '../assets/svgs/login.svg';



const Login = ({navigation}) => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')



  return (

    <View style={{
      flex: 3,
      flexDirection: 'column',
      justifyContent: 'center',
      padding:15,
      backgroundColor: "white",
      }}>
<ScrollView>
  <Img width={300} height={200} />
  <Text style={{fontSize: 49, fontWeight: 'bold', color: 'green'}}> Login </Text>
    <TextInput
      label="Email"
      value={mail}
      mode= {'flat'}
      activeUnderlineColor="green"
      onChangeText={mail => setMail(mail)}
      backgroundColor="white"
    />

  <TextInput
      label="password"
      value={password}
      secureTextEntry
      mode= {'flat'}
      activeUnderlineColor="green"
      backgroundColor="white"
      onChangeText={password => setPassword(password)}
    />
    <Text
    onPress={() => {navigation.push('Forgot')}}
     style={{textAlign: 'right', paddingTop: 15, color: 'green', paddingRight: 20,  paddingBottom: 15, display: 'flex'}}>forgot password?</Text>
    <Button  mode="outlined" icon={"google"} color='green'> login with google</Button>
    <Button style={{margin: 20, backgroundColor: "green",}} mode='contained'> login </Button>
    <Text
    onPress={() => {navigation.push('SignUp')}}
    style={{textAlign: "center", paddingTop: 24}}>New here? <Text style={{color: "green"}}>Register</Text> </Text>
    </ScrollView>
    </View>


  );
}

export default Login
