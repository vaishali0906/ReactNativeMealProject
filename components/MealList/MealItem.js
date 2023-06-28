import { Pressable } from "react-native";
import { View, Text, Image, StyleSheet, Platform} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

export default function MealItem( {ID, Title, ImageUrl, Affordability, Duration, Complexity }){
    const navigation = useNavigation();
    
    function onMealPressHandler(){
        navigation.navigate('MealDetails',
          { mealId : ID })
       }
    return(
        <View style = { styles.container}>
            <Pressable 
            onPress={ onMealPressHandler}
            style = {({Pressed}) => Pressed? styles.buttonPressed : null}
            android_ripple={{color: "#ccc"}}>
                <View>
                    <Image style= { styles.image} source={ {uri: ImageUrl}}></Image>
                    <Text style = { styles.title}>{ Title }</Text>
                   <MealDetails Duration={Duration} Complexity={Complexity} Affordability = {Affordability}/>

                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:16,
        borderRadius:8,
        backgroundColor: 'white',
        overflow:'hidden',
        elevation: 4,
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width:0, height: 2},
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    buttonPressed:{
        opacity:0.25
    },
    image:{
        width:'100%',
        height:200
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:'center',
        padding:8
    },
   
})