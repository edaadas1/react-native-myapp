import { View, Text, ScrollView,StyleSheet, TouchableOpacity,Image, TouchableHighlight, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import Fontawesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const CoffeeCards = ({data}) => {

    const navigation = useNavigation();

    const goCoffeeDetails =(item)=> {
        navigation.navigate("CoffeeDetails",item);
    }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:50}}>
      {
        data.map((item,id)=>{
            return(
                <View style={styles.card} key={id}>
                    <Image
                        source={item.coffee_image}
                        style={{
                            width:100,
                            height:100,
                        }}
                    />
                    <Text style={styles.coffee_card_name}>{item.name}</Text>
                    <View style={styles.rating}>
                        <Fontawesome name="star" size={20} color="white"/>
                        <Text style={{marginLeft:10,color:"white"}}>{item.rate}</Text>
                    </View>
                    <Text style={{marginTop:20,color:"white"}}>Volume {item.volume} ml</Text>
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:250,marginTop:45}}>
                        <Text style={{color:"white",fontSize:18}}>$ {item.price}</Text>
                        <TouchableOpacity style={styles.button_container} onPress={()=>goCoffeeDetails(item)}>
                            <Fontawesome name="plus" size={20} color="#862B0D" />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        })
      }
    </ScrollView>
  )
}

export default CoffeeCards

const styles=StyleSheet.create({
    card: {
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#862B0D",
        width:300,
        height:400,
        marginRight:40,
        borderRadius:25
        
    },
    coffee_card_name :{
        marginTop:10,
        fontSize:18,
        color:"white"
    },
    rating:{
        flexDirection:"row",
        marginTop:20,
        backgroundColor:"#CA955C",
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:20
    },
    button_container:{
        backgroundColor:"white",
        borderRadius:30,
        width:45,
        height:45,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
      }
})