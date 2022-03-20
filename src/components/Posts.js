import React,{ useState, useEffect } from 'react'
import  { Card, Button, Paragraph}  from 'react-native-paper'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            try{
                const fetchPosts = await fetch('http://iyceblog.herokuapp.com/api/posts')
                const data = await fetchPosts.json()
                console.log(data.results)
                setPosts(data.results)
            }catch(e){
                console.log('Error', e)
            }   
        }

        getPosts()
    }, [])
    
    return(
        <View style={[styles.container]}>
            {
                posts.map((post) => {
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
                                    <Button>Read</Button>
                                    </Card.Actions>
                                </Card>
                        </View>
                    )
                })
            }
        </View>
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