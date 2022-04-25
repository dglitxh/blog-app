import React, {useState} from 'react'
import { View, ScrollView, Text} frm "react-native"

const Comments = (props) => {
const { comments } = props
  return(
    <ScrollView>
      {
        comments.map((comment) => {
          return(
            <View>
              <Text>{comment}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  )
}

export default comment
