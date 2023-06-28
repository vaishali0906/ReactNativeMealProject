import { View, Text, StyleSheet } from "react-native"

export default function MealDetails({ Duration, Affordability, Complexity, style}){
    return(
        <View style = { styles.textContainer }>
        <Text style= { [styles.text, style]} >{ Duration }m</Text>
        <Text style= { [styles.text, style]} >{ Affordability }</Text>
        <Text style={ [styles.text, style]} >{ Complexity }</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    textContainer:{
        flexDirection:'row',
        justifyContent:'center'
    },
    text:{
        fontSize:16,
        margin:5

    }
})