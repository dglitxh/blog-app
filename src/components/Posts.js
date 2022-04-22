import React,{ useState, useEffect } from 'react'
import  { Card, Button, Paragraph}  from 'react-native-paper'
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Image
} from 'react-native'

const Posts = (props) => {

    const viewPost = (post) => {
        props.navigation.navigate('Post')
        props.sendPost(post)
    }
    
    return(
        <ScrollView style={[styles.container]}>
            {
                props.posts.map((post) => {
                    return(
                        <View key={post.id}>
                              <Card style={[styles.card]}>
                                  <Card.Cover source={{uri: post.thumbnail}}/>
                                    <Card.Title title={post.title} />
                                    <Card.Content>
                                        <Paragraph>{post.body.slice(0, 98)}...</Paragraph>
                                    </Card.Content>
                                    <Card.Actions>
                                    <Button>Comments</Button>
                                    <Button onPress={() => viewPost(post)}>Read</Button>
                                    </Card.Actions>
                                </Card>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,  
    },
    card: {
        marginBottom: 20,
    }
})

export default Posts