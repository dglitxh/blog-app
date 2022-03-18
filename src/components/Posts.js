import React,{ useState, useEffect } from 'react'
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
                            <Text>{post.title}</Text>
                            <Text style={{color: 'black'}}>The end</Text>
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