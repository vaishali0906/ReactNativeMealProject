import { View, Text, StyleSheet } from "react-native"


export default function ListItem({ dataSet}){
    return (
        dataSet.map((dataPoint) =>
        <View 
        style = { styles.listItem }
        key={dataPoint}>
         <Text 
         style = { styles.itemText}> {dataPoint}</Text>
        </View>
        )
    )
}

const styles = StyleSheet.create({
    listItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginHorizontal:12,
        marginVertical:4,
        backgroundColor:'#e2b497'
    },
    itemText:{
        color:'#351401',
        textAlign:'center'
    }
})