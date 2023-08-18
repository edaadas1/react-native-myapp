import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const BasketScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen

const styles = StyleSheet.create({
    container:{
        padding:50
    }
})