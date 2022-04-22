import  React from 'react'
import { View, ScrollView, Text, Image } from 'react-native'

const PostView = (props) => {
    const { post, comments } = props

    return(
        <ScrollView style={{backgroundColor: "white", padding:15}}>
            <Text style={{fontSize: 49, fontWeight: 'bold', color: 'green'}}>{post.title}</Text>
            <Image source={{uri: post.thumbnail}}/>
            <Text style={{fontSize: 20}}>{post.body}</Text>
            <View style={{paddingRight: 20}}>
            <Text> Comments</Text>
            {
              comments.map((comment) => {
                return (
                  <Text>{comment.body}</Text>
                )
              })
            }
            </View>
        </ScrollView>
    )
}

export default PostView
