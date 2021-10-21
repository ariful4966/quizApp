//import liraries
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from '../components/Title';

// create a component
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title>Quizzls</Title>
            <View style={styles.bannerContainer}>
                <Image source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png' }}
                    style={styles.banner}
                    resizeMode="contain"

                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 20,
        height: '100%'
    },
    banner: {
        width: 300,
        height: 300
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1

    },
    button:{
        width: '100%',
        backgroundColor: '#2708a0',
        padding:16,
        borderRadius: 5,
        alignItems:'center',
        marginBottom: 30
        
    },
    buttonText:{
        color: '#fff',
        fontSize: 24
    }
});

//make this component available to the app
export default Home;
