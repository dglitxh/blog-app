
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import {  View,  Text } from 'react-native';
import Img from '../assets/svgs/forgot.svg';



const Forgot = () => {
    const [mail, setMail] = useState('')
    
    return(
        <View style={{backgroundColor: "white", flex: 3, flexDirection: 'column', justifyContent: 'center', padding:15}}>
            <Img width={300} height={200} />
            <Text style={{fontSize: 49, fontWeight: 'bold', color: 'green'}}> Forgot </Text>
            <Text style={{fontSize: 49, fontWeight: 'bold', color: 'green'}}> Password? </Text>
                <TextInput
                label="Email"
                value={mail}
                mode= {'flat'}
                activeUnderlineColor="green"
                backgroundColor="white"
                onChangeText={mail => setMail(mail)}
                />
                <Button style={{margin: 20, backgroundColor: "green",}} mode='contained'> Submit </Button>
        </View>
    )
}

export default Forgot