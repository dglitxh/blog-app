import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState} from 'react'
import { View, Text } from 'react-native'
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Forgot from '../components/ForgotPwd'
import Profile from '../components/Profile';

const Stack = createNativeStackNavigator();

const NotUser = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgot" component={Forgot} />
    </Stack.Navigator>
  )
}


function UserStack() {
  const [user, setUser] = useState('')
  const auth = user? <Profile/> : <NotUser/>
  return (
    auth
  );
}

export default UserStack
