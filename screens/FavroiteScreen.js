import MealList from "../components/MealList/MealList"
import { MEALS } from "../data/dummy-data"
import { useContext } from "react"
//import {FavoriteContext} from "../store/context/favorite-context";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function FavroiteScreen(){
   //const favoriteContext =  useContext(FavoriteContext);
   const favoriteId = useSelector(state => state.favoriteMeals.ids)

   //const favoriteMeals=  MEALS.filter((mealId) => favoriteContext.ids.includes(mealId.id))
   const favoriteMeals=  MEALS.filter((mealId) => favoriteId.includes(mealId.id))

   if(favoriteMeals == 0){
    return <View style = { styles.container}>
        <Text style = { styles.text}>You have no favorite Meal yet...</Text>
    </View>
   }

    return <MealList items={favoriteMeals} />
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    text:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    }
})