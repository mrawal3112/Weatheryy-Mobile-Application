import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/cloudy.png')} style={styles.logo} />
            <Text style={styles.heading}>Discover the Weather of your city with
                <Text style={styles.title}> WEATHERYY</Text>
            </Text>
            <View>
                <Text style={styles.description}>Get to know your weather information and radar precipitation forecast</Text>
                <TouchableOpacity style={styles.startBtn}>
                    <Text style={{ color: 'white' }}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    logo: {
        width: 175,
        height: 175,
        marginTop: '50%'
    },
    heading: {
        fontSize: 25,
        marginTop: 40,
        marginBottom: 20,
        marginHorizontal: 30,
        textAlign: 'center',
        lineHeight: 40,
    },
    title: {
        color: '#de5fa0',
        fontWeight: 'bold'
    },
    description: {
        marginTop: 30,
        marginBottom: 80,
        marginHorizontal: 60,
        textAlign: 'center',
    },
    startBtn: {
        alignItems: 'center',
        backgroundColor: '#de5fa0',
        padding: 15,
        marginHorizontal: '15%',
        borderRadius: 10
    }
})

export default HomeScreen;