//import liraries
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Button from '../components/Button';
import Title from '../components/Title';

// create a component
const Result = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Title>Results</Title>
            <View style={styles.bannerContainer}>
                <Image source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/q-and-a-service-3678714-3098907.png' }}
                    style={styles.banner}
                    resizeMode="contain"
                    
                />
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                    <Button>Home</Button>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    },
    banner: {
        width: 300,
        height: 300
    },
    bannerContainer: {
       justifyContent: 'center',
       alignItems: 'center'

    }
});

//make this component available to the app
export default Result;
