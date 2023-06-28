import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealDetails from "../components/MealDetails"
import Subtitle from "../components/Subtitle"
import ListItem from "../components/ListItem"
import { useContext, useLayoutEffect } from "react"
import IconButton from "../components/IconButton"
//import { FavoriteContext } from "../store/context/favorite-context"
import { useDispatch, useSelector } from "react-redux"
import { addFavorite, removeFavorite } from "../store/redux/favorite"

export default function MealDetailScreen({ route, navigation}){
    //const favoriteMealContx = useContext(FavoriteContext);

    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids)
    const dispatch = useDispatch()

    const mealID = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealID)

    //const isMealsFavorite = favoriteMealContx.ids.includes(mealID)
    const isMealsFavorite = favoriteMealsIds.includes(mealID)

    function changeFavoriteStatusHandler(){
        if(isMealsFavorite){
            dispatch(removeFavorite({id : mealID}));
            //favoriteMealContx.removeFavorite(mealID)
        }else{
            dispatch(addFavorite({id : mealID}));
            //favoriteMealContx.addFavorite(mealID)
        }

    }

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerRight: () => {
             return <IconButton 
             icon={ isMealsFavorite ? 'star' : "star-outline"}
              color="white" 
              onPress={ changeFavoriteStatusHandler }/>
            }
        })
    },[navigation,changeFavoriteStatusHandler])
    
    return(
        <ScrollView style = { styles.rootContainer }>
        <View>
            <Image style={ styles.image } source={{ uri : selectedMeal.imageUrl}}/>
            <Text style={ styles.titleText}>{ selectedMeal.title }</Text>
            <MealDetails style = { styles.text} Duration={ selectedMeal.duration} Complexity={selectedMeal.complexity} Affordability={ selectedMeal.affordability}/>
           
           <View style = { styles.container }>
           <View style= { styles.listContainer }>
           <Subtitle>Ingredients</Subtitle>
           <ListItem dataSet={ selectedMeal.ingredients}></ListItem>

            <Subtitle>XYZ</Subtitle>
            <ListItem dataSet={ selectedMeal.steps}></ListItem>
            </View>
            </View>

        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:20
    },
    image :{
        width:'100%',
        height: 250
    },
    titleText:{
        alignSelf:'center',
        fontSize: 24,
        fontWeight:'bold',
        color:'white'
    },
    text:{
        fontSize:16,
        color:'white'
    },
    listContainer:{
        maxWidth:'90%'
        
    },
    container:{
        alignItems:'center'
    }
    
})