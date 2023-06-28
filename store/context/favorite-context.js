import { useState, createContext} from 'react';

export const FavoriteContext = createContext({
    ids:[],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

export default function FavoriteContextProvider({children}){
    const [favoriteMealsIds,setFavoriteMealsIds] = useState([]);

    function addFavorite(id){
        setFavoriteMealsIds((currentFavIds) => [...currentFavIds,id]);
    }

    function removeFavorite(id){
        setFavoriteMealsIds((currentFavIds) => currentFavIds.filter(mealId => mealId !== id))
    }

    const value = {
        ids: favoriteMealsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoriteContext.Provider value={value}>{ children }</FavoriteContext.Provider>
}