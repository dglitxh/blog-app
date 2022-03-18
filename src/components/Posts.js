import { useState } from 'react'
import {
    View,
} from 'react-native'

const Posts = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try{
            const fetchPosts = await fetch('http://iyceblog.herokuapp.com')
            const data = await fetchPosts.json()
            alert(data)
            setPosts(data)
        }catch(e){
            console.log(e)
        }
        
    }

    useEffect( async () => {
        getPosts()
    }, [])
    
    return(
        <View>

        </View>
    )
}