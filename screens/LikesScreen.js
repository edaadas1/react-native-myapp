import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const LikesScreen = () => {

  const {params:favouriteCount} = useRoute();

  return (
    <View style={styles.container}>
      <Text>Like Screen</Text>
    </View>
  )
}

export default LikesScreen

const styles=StyleSheet.create({
    container:{
        padding:50
    }
})