//import libraries
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// create a component
const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState([]);
    const [ques, setQues] = useState([])
    const [next, setNext] = useState(false)
    const getQuiz = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results)
    }
    const handleAnswer = (data) => {
        const currAns = questions.map(aws => {
            return aws.correct_answer === data.option
        })
        const answer = currAns.find(item => item === true) ? true : false
        setQues([...ques, answer])
        ques.length >= 10 ? setNext(true) : setNext(false)
    }
    console.log(ques);

    useEffect(() => {
        getQuiz();
    }, [])


    return (
        <ScrollView style={styles.container}>
            {
                questions && <View style={styles.parent}>
                    {
                        questions.map((qes, i) =>
                            <View key={i}>

                                <View style={styles.top}>
                                    <Text style={styles.question}>{i + 1}Q. {qes.question}</Text>
                                </View>
                                <View style={styles.options}>
                                    {[...qes.incorrect_answers, qes.correct_answer].map((option, i) =>
                                        <TouchableOpacity key={i} style={styles.optionButton} value={option} onPress={() => handleAnswer({ option })}>
                                            <Text style={styles.option}>{option}</Text>
                                        </TouchableOpacity>
                                    )}

                                    {/* <TouchableOpacity style={styles.optionButton}>
                                        <Text style={styles.option}>Cool Option 2</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.optionButton}>
                                        <Text style={styles.option}>Cool Option 3</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.optionButton}>
                                        <Text style={styles.option}>Cool Option 4</Text>
                                    </TouchableOpacity> */}
                                </View>
                            </View>
                        )
                    }
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>SKIP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} disabled={next ? false : true} onPress={next ? () => navigation.navigate('Result') : () => navigation.navigate('Quiz')}>
                            <Text style={styles.buttonText}>NEXT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: '100%'
    },
    top: {
        marginVertical: 16,

    },
    options: {
        flex: 1,
        marginVertical: 16
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#2708a0',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 30

    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    question: {
        fontSize: 25
    },
    option: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#0a9396',
        paddingHorizontal: 12,
        borderRadius: 10
    },
    parent: {
        height: '100%'
    }
});

//make this component available to the app
export default Quiz;
