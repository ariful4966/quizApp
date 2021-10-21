//import liraries
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// create a component
const Title = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{children}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingVertical:16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
       fontSize: 36,
       fontWeight: '600'
    }
});

//make this component available to the app
export default Title;
