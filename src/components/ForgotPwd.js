
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { ScrollView, View, Image, Text } from 'react-native';


const Forgot = () => {

    return(
        <View style={{flex: 3, flexDirection: 'column', justifyContent: 'center', padding:15}}>
            <Text style={{fontSize: 49, fontWeight: 'bold', color: 'green'}}> Forgot </Text>
            <Text style={{fontSize: 49, fontWeight: 'bold', color: 'green'}}> Password? </Text>
                <TextInput
                label="Email"
                value={mail}
                mode= {'outlined'}
                onChangeText={mail => setMail(mail)}
                />
        </View>
    )
}

export default Forgot