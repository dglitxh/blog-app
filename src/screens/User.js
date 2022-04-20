import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState} from 'react'
import { View } from 'react-native'
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Forgot from '../components/ForgotPwd'
import Profile from '../components/Profile';
const Stack = createNativeStackNavigator();


function UserStack() {
  const [user, setUser] = useState('')
  return (
    <View>
    <Stack.Navigator>
      {
      user?
        <View>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Forgot" component={Forgot} />
        </View>
      :
        <View>
          <Stack.Screen name="Profile" component={Profile}/>
        </View>
      }
    </Stack.Navigator>
    </View>
  );
}

export default UserStack
