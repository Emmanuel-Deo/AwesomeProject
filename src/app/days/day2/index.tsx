//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

// create a component
const DayDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{title : 'Day 2'}}/>
            <Text style={{fontFamily:'AmaticBold', fontSize: 100}}>Onboarding Screen</Text>
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
