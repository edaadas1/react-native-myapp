import { View, Text, TouchableOpacity,StyleSheet, ScrollView} from 'react-native'
import React from 'react'

const CoffeeTypes = ({data}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        data.map((item,id)=>{
            return(
                <TouchableOpacity key={id} style={styles.coffee_types}>
                    <Text style={styles.coffee_names}>{item.name}</Text>
                </TouchableOpacity>
            )
        })
      }
    </ScrollView>
  )
}

export default CoffeeTypes

const styles=StyleSheet.create({
    coffee_types:{
        paddingHorizontal:40,
        paddingVertical:20,
        marginRight:15,
        backgroundColor:"#CA955C",
        borderRadius:30
    },
    coffee_names:{
        color:"white",
        fontSize:15
    }
})