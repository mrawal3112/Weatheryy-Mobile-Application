import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
// import {
//     HeaderSearchBar,
//     HeaderClassicSearchBar
// } from "react-native-header-search-bar";


const SearchLocation = () => {
    const [location, setLocation] = useState('')
    return (
        <View>
            {/* <HeaderClassicSearchBar onChangeText={text => console.log(text)} /> */}
            <Text style={styles.title}>Weather</Text>
            <View style={styles.Container}>
                <EvilIcons name="search" size={24} color="#ADADC9" style={{ padding: 7 }} />
                <TextInput placeholder='Search for a city or airport' style={styles.inputField}
                    value={location} onChangeText={(newInput) => setLocation(newInput)}
                    autoCapitalize='none' autoCorrect={false}></TextInput>
            </View>
            {console.log(location)}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 60,
        marginBottom: 10,
        marginHorizontal: 20
    },
    Container: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#E5E4E2',
        padding: 5,
        margin: 10,
        borderRadius: 10

    },

})

SearchLocation.navigationOptions = () => {
    return {
        headerShown: false,
    }
};

export default SearchLocation;