//import liraries
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {Link,  Stack } from 'expo-router';

// create a component
const DayDetailsScreen = () => {
    return (
            <View style={styles.container}>
                <Stack.Screen options={{title : 'Day 4'}}/>
                <Text style={{fontFamily:'AmaticBold', fontSize: 100}}>AIRBNB map </Text> 

            <Link href={'/days/day4/airbnb' } asChild>
                <Button  title ='Go to AirBNB Map' /> 
            </Link>
                   

             </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default DayDetailsScreen;
