import  React from 'react'
import { View, ScrollView } from 'react-native'

const PostView = () => {
    const { post } = props

    return(
        <ScrollView>
            <Text>{post.title}</Text>
            <Image source={{uri: post.thumbnail}}/>
            <Text>{post.text}</Text>
        </ScrollView>
    )
}