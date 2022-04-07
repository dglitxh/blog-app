import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import Login from "../components/Login"
import SignUp from "../components/"
import { View, Text } from "react-native";



const UserStack = () => {
    const [user, setUser] = useState('')
    const authStack = createNativeStackNavigator();
    return(
         <authStack.Navigator>
              <authStack.Screen name="Login" component={Login}/>
              <authStack.Screen name="SignUp" component={SignUp}/>
              <authStack.Screen name="ForgotPwd" component={ForgotPwd}/>
          </authStack.Navigator>
    
    )
}

export default UserStack
