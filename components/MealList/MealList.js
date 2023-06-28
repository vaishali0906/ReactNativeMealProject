import { View, FlatList, StyleSheet } from "react-native"
import MealItem from "./MealItem"

export default function MealList({ items}){

    function renderMealData(itemData){

        const mealData = itemData.item
        const mealRouteData = {
            ID : mealData.id,
            Title : mealData.title,
            ImageUrl : mealData.imageUrl,
            Duration : mealData.duration,
            Affordability : mealData.affordability,
            Complexity: mealData.complexity
    
        }
            return <MealItem {...mealRouteData}  ></MealItem>
        }
    
        return(
            <View style = { styles.container }>
                <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealData}></FlatList>
            </View>
        )   

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})