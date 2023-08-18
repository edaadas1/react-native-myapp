import { View, Text , StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ImageBackground} from 'react-native'
import React from 'react'
import Fontawesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

  const navigation = useNavigation();

  const goHome =()=> {
    navigation.goBack();
  }

  const goLogin =()=> {
    navigation.push("Login");
  }

  const goSignup =()=> {
    navigation.push("SignUp");
  }


  return (
    <ImageBackground
      source={{uri:"https://images.all-free-download.com/images/graphiclarge/vector_coffee_beans_background_158036.jpg"}}
      style={{flex:1,marginTop:30}}
    >
    
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.back_button} onPress={goHome}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.profile_card}>
          <TouchableOpacity style={styles.profile_image}>
            <Fontawesome name="user" size={35} color="black" />
          </TouchableOpacity>
          <TextInput placeholder='Email' style={styles.textinput}></TextInput>
          <TextInput placeholder='Password' style={styles.textinput}></TextInput>
          <TouchableOpacity style={{marginTop:20,marginBottom:50}}>
            <Text>Forgot Password ?</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={styles.login} onPress={goLogin}>
              <Text style={{color:"white"}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.login} onPress={goSignup}>
              <Text style={{color:"white"}}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
    </ImageBackground>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
      paddingHorizontal:20,
      paddingVertical:40
    },
    back_button:{
      width:50,
      height:50,
      borderRadius:25,
      backgroundColor:"#CA955C",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      marginTop:5
    },
    profile_card:{
      backgroundColor:"lightgray",
      alignItems:"center",
      justifyContent:"center",
      marginTop:20,
      paddingVertical:30,
      marginTop:70,
      borderRadius:20
    },
    profile_image:{
      backgroundColor:"#CA955C",
      width:80,
      height:80,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:40
    },
    textinput:{
      width:300,
      height:50,
      backgroundColor:"white",
      marginTop:20,
      textAlign:"center",
      borderRadius:25
    },
    login:{
      marginTop:20,
      backgroundColor:"#862B0D",
      alignItems:"center",
      width:150,
      paddingHorizontal:20,
      paddingVertical:15,
      borderRadius:25
    }
})