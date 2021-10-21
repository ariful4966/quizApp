//import liraries
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// create a component
const Button = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={{color: '#fff', fontSize: 25}}>{children}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2708a0',
    },
});

//make this component available to the app
export default Button;
