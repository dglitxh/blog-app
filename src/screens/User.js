import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react'
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Forgot from '../components/ForgotPwd'

const Stack = createNativeStackNavigator();

function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Forgot" component={Forgot} />
    </Stack.Navigator>
  );
}

export default UserStack
