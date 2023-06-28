import { View, Pressable, Text, StyleSheet, Platform} from 'react-native'

export default function CategoriesGridTile({ title, color, onPressTile }){
    return(
    <View 
    style = {[ styles.conatiner , { backgroundColor: color }]}>
        <Pressable 
        style = {({ pressed }) => [styles.button, pressed? styles.buttonPressed : null]} 
        android_ripple={ {color: "#ccc"}}
        onPress={ onPressTile }>
        <View style = {styles.innerContainer }>
            <Text style = { styles.buttonText }>{title}</Text>
            </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner:{
        flex: 1,
        elevation: 4,
        margin:16,
        height:150,
        borderRadius:4,
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width:0, height: 2},
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    buttonPressed:{
        opacity:0.25
    },
    innerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        flex:1
    },
    buttonText:{
        fontSize: 20
    }

})