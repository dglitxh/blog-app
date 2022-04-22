import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react'
import { View, ScrollView } from 'react-native'
import Posts from '../components/Posts';
import PostView from '../components/PostView';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            try{
                const fetchPosts = await fetch('http://iyceblog.herokuapp.com/api/posts')
                const data = await fetchPosts.json()
                console.log("got posts")
                setPosts(data.results)
                alert('got data')
            }catch(e){
                console.log('Error', e)
            }
        }

        const getComments = async () => {
          try{
            const fetchComments = await fetch('http://iyceblog.herokuapp.com/api/comments')
            const data = await fetchComments.json()
            console.log(data)
            setComments(data.results)
        }catch(e) {
          console.log("Error:", e)
        }
        }
        getPosts()
        getComments()
    }, [])

    const PostsComp = ({navigation}) => {
        return(
            <View>
                <Posts navigation={navigation} posts={posts} sendPost={sendPost}/>
            </View>
        )

    }

    function PostComp() {
      let postcomments = comments.filter((el) => el.post == post.id)
        return(
            <ScrollView>
                <PostView comments={postcomments} post={post}/>
            </ScrollView>
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
