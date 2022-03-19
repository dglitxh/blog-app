import React,{ useState, useEffect } from 'react'
import  Card  from 'react-native-ui-lib'
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
                alert(data.results[0].title)
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
            <Text>Wel lets go</Text>
            {
                posts.map((post) => {
                    return(
                        <View key={post.id}>
                            <Card flex center onPress={() => console.log('pressed')}> 
                            <Card.Image source={{uri: post.thumbnail}}/>
                            <Text>{post.title}</Text>
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
       
    }
})

export default Posts