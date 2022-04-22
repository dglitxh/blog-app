import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react'
import { View } from 'react-native'
import Posts from '../components/Posts';
import PostView from '../components/PostView';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPosts = async () => {
            try{
                const fetchPosts = await fetch('http://iyceblog.herokuapp.com/api/posts')
                const data = await fetchPosts.json()
                console.log(data.results)
                setPosts(data.results)
                alert('got data')
            }catch(e){
                console.log('Error', e)
            }
        }
        getPosts()
    }, [])

    const PostsComp = ({navigation}) => {
        return(
            <View>
                <Posts navigation={navigation} posts={posts} sendPost={sendPost}/>
            </View>
        )

    }

    function PostComp() {
        return(
            <View>
                <PostView post={post}/>
            </View>
        )

    }

    function sendPost(post) {
        setPost(post)
    }

    return(
        <Stack.Navigator>
            <Stack.Screen name={"Posts"} component={PostsComp} />
            <Stack.Screen name={"Post"} component={PostComp} />
        </Stack.Navigator>
    )
}


export default HomeStack
