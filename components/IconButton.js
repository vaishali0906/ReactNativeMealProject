import { Pressable } from "react-native"
import { Ionicons} from "@expo/vector-icons"

export default function IconButton({ icon, color, onPress}){
    return (
       <Pressable onPress={ onPress }>
        <Ionicons name={icon} color={color} size={24}/>
       </Pressable>
    );
}