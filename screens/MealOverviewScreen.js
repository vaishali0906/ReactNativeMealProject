import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList/MealList.js";

export default function MealOverviewScreen({ route, navigation, onMealPress }){

    const catId = route.params.CategoryId;
    
    const displayMeal  = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    useLayoutEffect(() => {
        const catTitle = CATEGORIES.find((category) => category.id === catId).title
        navigation.setOptions({
            title: catTitle})
    } ,[catId, navigation])

   return <MealList items={displayMeal} />

}

