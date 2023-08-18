import { View, Text, SafeAreaView,StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Fontawesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import CoffeeTypes from './../components/coffeeTypes';
import CoffeeCards from './../components/coffeeCards';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  const data = [
      {
        name:"Cappucino",
        rate : "4.3",
        volume : "110",
        price : "15.50",
        coffee_image : require("../assets/images/cappucino.png")
      },
      {
        name:"Latte",
        rate : "3.5",
        volume : "80",
        price : "10.30",
        coffee_image : require("../assets/images/latte.png")
      },
      {
        name:"Espresso",
        rate : "4.0",
        volume : "100",
        price : "30.00",
        coffee_image : require("../assets/images/espresso.png")
      },
      {
        name:"Mocha",
        rate : "4.7",
        volume : "120",
        price : "23.10",
        coffee_image : require("../assets/images/mocha.png")
      },
      {
        name:"Americano",
        rate : "4.6",
        volume : "116",
        price : "25.50",
        coffee_image : require("../assets/images/americano.png")
      },
    
  ]

  const goProfile =()=> {
    navigation.navigate("Profile")
  }

  const goNotification =()=> {
    navigation.navigate("Notification")
  }

  const goLocation =()=> {
    navigation.navigate("Location")
  }

  const goLikeScreen =()=> {
    navigation.navigate("Likes")
  }

  const goBasketScreen =()=> {
    navigation.navigate("Basket")
  }


  return (
    
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={{flex:1}}
      >
      {/* Topbar */}
      <View style={styles.topbar}>
        <TouchableOpacity style={{backgroundColor:"#862B0D",paddingHorizontal:20,paddingVertical:15,borderRadius:35}} onPress={goProfile}>
          <Fontawesome name="user" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.location} onPress={goLocation}>
          <Fontawesome name="map-pin" size={15} color="white" />
          <Text style={styles.location_name}>New York,NYC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"#862B0D",paddingHorizontal:15,paddingVertical:15,borderRadius:35}} onPress={goNotification}>
          <Fontawesome name="bell" size={25} color="white" />
        </TouchableOpacity>
      </View>
      
      {/* Search Part */}
      <View style={styles.search_part}>
        <TextInput placeholder='Search' style={styles.search_input}></TextInput>
        <TouchableOpacity style={styles.search_icon_box}>
          <Fontawesome name="search" size={20} color="lightgray"/>
        </TouchableOpacity>
      </View>

      {/* Coffee Types */}
      <View style={styles.coffee_list}>
        <CoffeeTypes data={data}/>
      </View>

      {/* Coffee Cards */}
      <View style={styles.coffee_cards_part}>
        <CoffeeCards data={data}/>
      </View>

      {/* Footer Menu */}
      <View style={styles.footer_menu_part}>
        <TouchableOpacity style={{backgroundColor:"white",borderRadius:20,width:40,height:40,justifyContent:"center",alignItems:"center"}}>
          <Ionicons name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goLikeScreen}>
          <Fontawesome name="heart" size={25} color="black"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={goBasketScreen}>
          <Ionicons name="basket" size={30} color="black" />
        </TouchableOpacity>
      </View>

      </ImageBackground>
    </SafeAreaView>

  )
}

export default HomeScreen

const styles=StyleSheet.create({
    container:{
      flex:1,
    },
    topbar:{
      height:120,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      paddingHorizontal:10
    },
    location:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      backgroundColor:"#862B0D",
      paddingHorizontal:20,
      paddingVertical:15,
      borderRadius:35
    },
    location_name:{
      paddingLeft:10,
      color:"white"
    },
    search_part:{
      height:70,
      backgroundColor:"lightgray",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      paddingHorizontal:20,
      borderRadius:35,
    },
    search_icon_box:{
      backgroundColor:"#862B0D",
      padding:10,
      borderRadius:20
    },
    search_input:{
      color:"black"
    },
    coffee_list:{
      marginTop:30
    },
    coffee_cards_part:{
      marginTop:30,
      height:400,
      flexDirection:"row",
      alignItems:"center",
    },
    footer_menu_part:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      backgroundColor:"#CA955C",
      borderRadius:45,
      paddingHorizontal:20,
      paddingVertical:15,
      marginTop:35
    }
})