import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontawesome from '@expo/vector-icons/FontAwesome';

const NotificationCard = ({data}) => {

  return (
    <ScrollView>
        {
            data.map((item,id)=>{
                return(
                    <View style={styles.notification_container} key={id}>
                        <Text>{item.text}</Text>
                        <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
                            <Fontawesome name="circle" size={15} color="#FBD85D" />
                            <Text style={{marginLeft:10}}>{item.time}</Text>
                        </View>
                    </View>
                )
            })
        }
    </ScrollView>
  )
}

export default NotificationCard

const styles = StyleSheet.create({
    notification_container:{
        marginBottom:20,
        borderWidth:2,
        paddingHorizontal:10,
        paddingVertical:10
    }
})