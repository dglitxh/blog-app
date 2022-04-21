import  React from 'react'
import { View, ScrollView, Text, Image } from 'react-native'

const PostView = (props) => {
    const { post } = props

    return(
        <ScrollView>
            <Text>{post.title}</Text>
            <Image source={{uri: post.thumbnail}}/>
            <Text>{post.body}</Text>
        </ScrollView>
    )
}

export default PostView