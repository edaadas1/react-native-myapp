import { View, Text ,StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontawesome from '@expo/vector-icons/FontAwesome';
import NotificationCard from '../components/NotificationCard';

const NotificationScreen = () => {

  const data = [
      {
        text:"Invite your friends and enjoy discounts.",
        time : "45 second ago"
      },
      {
        text:"Use QR code win a free drink",
        time : "1 minute ago"
      },
      {
        text:"Come on your birthday and get 50% discount on the coffee you choose.",
        time : "1 hour ago"
      },
      {
        text:"If you buy 5 coffees through the application, 1 coffee is from us.",
        time : "1 day ago"
      },
      {
        text:"Invite your friends and enjoy discounts.",
        time : "45 second ago"
      },
      {
        text:"Use QR code win a free drink",
        time : "1 minute ago"
      },
      {
        text:"Come on your birthday and get 50% discount on the coffee you choose.",
        time : "1 hour ago"
      },
      {
        text:"If you buy 5 coffees through the application, 1 coffee is from us.",
        time : "1 day ago"
      },
  ]

  const navigation = useNavigation();

  const goHome =()=> {
    navigation.goBack();
  }


  return (
    <SafeAreaView style={styles.container}>
      {/* Notification top menu */}
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:30}}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <TouchableOpacity style={styles.back_button} onPress={goHome}>
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
          <Text style={{marginLeft:25,fontSize:18}}>Notifications</Text>
        </View>
        <View>
          <TouchableOpacity style={{backgroundColor:"#862B0D",paddingHorizontal:15,paddingVertical:15,borderRadius:35}}>
            <Ionicons name="settings" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Notification results */}
      <View style={{marginBottom:30,borderWidth:3,width:100,paddingVertical:5,paddingLeft:5,borderRadius:10,backgroundColor:"black"}}>  
        <Text style={{color:"white"}}>Result ({data.length})</Text>
      </View>

      {/* Notification List */}
      <View style={styles.notifications_part}>
        <NotificationCard data={data}></NotificationCard>
      </View>

      
    </SafeAreaView>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
    container:{
      paddingHorizontal:20,
      paddingVertical:40,
      marginTop:10
    },
    back_button:{
      width:50,
      height:50,
      borderRadius:25,
      backgroundColor:"#CA955C",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
    },
    notifications_part:{
      height:650
    }
})