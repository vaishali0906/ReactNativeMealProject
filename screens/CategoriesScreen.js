import { FlatList } from 'react-native'
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGridTile from '../components/CategoriesGridTile';


export default function CategoriesScreen({ navigation }){

  function renderCategoryItems(itemData){
    function onPressHandler(){
     
      navigation.navigate('MealDesc',
       { CategoryId : itemData.item.id })
    }
   
      return (
           <CategoriesGridTile 
           title={ itemData.item.title }
           color={ itemData.item.color}
           onPressTile={ onPressHandler }/>
          );
       }

  

    return(
      <FlatList data={ CATEGORIES }
      keyExtractor={(item) => item.id} 
      renderItem= { renderCategoryItems }
      numColumns={2}/>
    );
}