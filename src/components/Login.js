import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Text, ScrollView } from 'react-native';
import Img from '../assets/svgs/login.svg';



const Login = ({navigation}) => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  const postLogin = async () => {
    const settings = {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: mail,
        password: password
      })
    }
    try{
      const response = await fetch("iyceblog.herokuapp.com/api/auth/login", settings)
      const data = await response.json()
      console.log(data)

    }catch(e){
      console.log(e)
    }
  }
  


  return (
  <ScrollView>
    <View style={{
      flex: 3,
      flexDirection: 'column',
      justifyContent: 'center',
      padding:15,
      backgroundColor: "white",
      }}>

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
     style={
       {
         textAlign: 'right', 
         paddingTop: 15, 
         color: 'green', 
         paddingRight: 20,  
         paddingBottom: 15, 
         display: 'flex'
         }
        }>
          forgot password?
      </Text>

    <Button  mode="outlined" icon={"google"} color='green'> login with google</Button>
    <Button onPress={() => postLogin()} style={{margin: 20, backgroundColor: "green",}} mode='contained'> login </Button>
    <Text
    onPress={() => {navigation.push('SignUp')}}
    style={
      {
        textAlign: "center", 
        }
      }>
        New here? 
        <Text style={{color: "green"}}>Register</Text> 
    </Text>
    </View>
    </ScrollView>


  );
}

export default Login
