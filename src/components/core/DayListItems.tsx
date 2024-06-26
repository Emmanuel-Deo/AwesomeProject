import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";


type DayListItems = {
    day: number;
};

export default function DayListItems({day}: DayListItems) {

    return (
      <Link href={`days/day${day}`} asChild>

        <Pressable  style={styles.box} >
          <Text style={styles.text}>{day}</Text>
         
         </Pressable>
         </Link>
    )
    
}

const styles = StyleSheet.create({
    
    box:{
      backgroundColor: '#F9EDE3',
      flex: 1,
      aspectRatio:1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor:'#9b4521',
      borderRadius: 20, 
  
    },
    text:{
      color: '#9b4521',
      fontSize: 70,
      fontFamily  : 'AmaticBold'
    }
  });
