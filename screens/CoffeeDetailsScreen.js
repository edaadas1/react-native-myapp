import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity,Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Fontawesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native'

const CoffeeDetailsScreen = () => {

  const {params:item} = useRoute();
  //  coffeeCard sayfasındaki cardlardaki bilgiyi item ile gönderdik ve params ile bu sayfada aldık

  const [favourite,setFavourite] = useState(false);

  const [count,setCount] = useState(2);

  const handleDecrement=()=>{
    setCount(count-1)
  }

  const handleIncrement=()=>{
    setCount(count+1)
  }

  const handleLike=()=>{
    setFavourite(!favourite)
  }

  const navigation = useNavigation();

  const goHome =()=> {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* details top menu */}
      <ImageBackground
        source={require("../assets/images/background2.jpg")}
      >
      <View style={{height:100,flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10}}>
        <TouchableOpacity style={styles.back_button} onPress={goHome}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.back_button} onPress={handleLike} >
          <Ionicons name="heart" size={30} color={favourite ? "red":"white"}/>
        </TouchableOpacity>
      </View>
      <View style={{alignItems:"center"}}>
        <Image 
          source={item.coffee_image}
          style={{width:150,height:150,marginBottom:30}}
        ></Image>
      </View>
      
      </ImageBackground>

        <View style={styles.rating}>
          <Fontawesome name="star" size={20} color="white"/>
            <Text style={{marginLeft:10,color:"white"}}>{item.rate}</Text>
        </View>
      
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:15}}>
          <Text style={{fontSize:20,fontWeight:"bold"}}>{item.name}</Text>
          <Text style={{fontWeight:"bold"}}>$ {item.price}</Text>
        </View>

        <View style={{marginTop:15}}>
          <Text style={{fontWeight:"bold"}}>Coffee Size</Text>
          <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10}}>
            <TouchableOpacity style={styles.size_button}>
              <Text style={{color:"white"}}>Small</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.size_button}>
              <Text style={{color:"white"}}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.size_button}>
              <Text style={{color:"white"}}>Large</Text>
            </TouchableOpacity>
          </View>
        </View>

          <View>
            <Text style={{marginTop:15,marginBottom:5,fontWeight:"bold"}}>About</Text>
            <Text style={{marginBottom:50,textAlign:"justify"}}>The taste of coffee can vary depending on factors such as the type of beans,roast level,brewing method,and the addition of any flavors or sweeteners. </Text>
          </View>
          
          
          <View  style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:60}}>
            <Text>Volume <Text style={{fontWeight:"bold",fontSize:18}}>{item.volume} ml</Text></Text>
            <View style={{borderWidth:1,width:150,height:40,borderColor:"black",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",borderRadius:20}}>
              <TouchableOpacity onPress={handleDecrement}>
                <Fontawesome name="minus" size={20} color="black" />
              </TouchableOpacity>
              <Text style={{fontWeight:"bold",fontSize:15}}>{count}</Text>
              <TouchableOpacity onPress={handleIncrement}>
                <Fontawesome name="plus" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <TouchableOpacity style={{flex:1,height:50,borderRadius:35,borderWidth:2,borderColor:"black",marginRight:10,alignItems:"center",justifyContent:"center"}}>
              <Ionicons name="basket" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{flex:6,height:50,borderRadius:35,alignItems:"center",justifyContent:"center",backgroundColor:"#CA955C"}}>
              <Text style={{textAlign:"center",color:"white"}}>BUY NOW</Text>
            </TouchableOpacity>
          </View>

      
    </SafeAreaView>
  )
}

export default CoffeeDetailsScreen

const styles = StyleSheet.create({
    container:{
      paddingHorizontal:20,
      paddingVertical:40
    },
    back_button:{
      width:50,
      height:50,
      borderRadius:25,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      marginTop:20,
      borderWidth:2,
      borderColor:"white"
    },
    rating:{
      flexDirection:"row",
      marginTop:20,
      backgroundColor:"#CA955C",
      paddingHorizontal:10,
      paddingVertical:5,
      borderRadius:20,
      width:80
    },
    size_button:{
      backgroundColor:"#CA955C",
      paddingHorizontal:30,
      paddingVertical:10,
      borderRadius:20,
    }
  
})