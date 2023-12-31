import { StatusBar } from 'expo-status-bar';
import { StyleSheet,} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer}  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealOverviewScreen from './screens/MealOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavroiteScreen from './screens/FavroiteScreen';
import { Ionicons } from '@expo/vector-icons'
import  FavoriteContext  from './store/context/favorite-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const ScreenStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
 
  return (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#351401'},
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25'},
      drawerContentStyle: { backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor:'#e4baa1'
    }}>
    <Drawer.Screen
     name="Categories" 
     component={ CategoriesScreen }
     options={{
      title: 'All Categories',
      drawerIcon: ({ color, size}) => <Ionicons name="list" color={color} size={ size }/>
     }}/>
    <Drawer.Screen
     name="Favorite" 
     component={ FavroiteScreen }
     options={{
      title: 'Favorite',
      drawerIcon: ({ color, size}) => <Ionicons name="star" color={color} size={ size }/>
     }}
     />
  </Drawer.Navigator>
  );
}

export default function App() {
  return (
   <>
   <StatusBar style = 'light' ></StatusBar>
  
    <Provider store={store}>
   <NavigationContainer>
    <ScreenStack.Navigator 
    initialRouteName='MealCategories'
    screenOptions={{
      headerStyle: { backgroundColor: "#351401"},
      headerTintColor: 'white',
      contentStyle: { backgroundColor: '#3f2f25'}
    }}>
     <ScreenStack.Screen 
     name='MealDesc'
     component={ MealOverviewScreen } 
    //  options={({route, navigation})=>{
    //   const catId = route.params.CategoryId
    //   return {
    //     title: catId
    //   };
    // }}
     />
      <ScreenStack.Screen
      name= 'MealCategories' 
      component={DrawerNavigator} //CategoriesScreen
      options={{
        headerShown : false
       }}/>

       <ScreenStack.Screen
       name='MealDetails'
       component={ MealDetailScreen } />
     </ScreenStack.Navigator>
     </NavigationContainer>
     </Provider>
     
     </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
