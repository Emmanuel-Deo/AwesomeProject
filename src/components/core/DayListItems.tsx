import { Text, View, StyleSheet } from "react-native"


type DayListItems = {
    day: number;
};

export default function DayListItems({day}: DayListItems) {

    return (
        <View style={styles.box} >
          <Text style={styles.text}>{day}</Text>
         </View>
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
    }
  });
  