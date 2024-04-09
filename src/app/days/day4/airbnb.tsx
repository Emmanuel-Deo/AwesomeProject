//import liraries
import { Stack } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

// create a component
export default function AirbnbScreen() {
    return (
        <View>
            <Stack.Screen options={{headerShown:false}}/>
            <MapView style ={{width : '100%', height : '100%'}} />
        </View>

    );
};