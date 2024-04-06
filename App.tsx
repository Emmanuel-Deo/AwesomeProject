import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DayListItems from './src/components/core/DayListItems';

const days = [...Array(25)].map((val, index)=>index+1);
console.log(days)

export default function App() {
  return (
    <View style={styles.container}>

      <FlatList
      contentContainerStyle = {styles.content}
      columnWrapperStyle = {styles.column}
      numColumns={2}
        data = {days}
        renderItem={({item})=><DayListItems day = {item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content:{
    gap: 10,
    padding : 10,
  },
  column:{
    gap: 10,
  },
});
