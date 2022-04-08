import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const SearchLocation = ({ navigation }) => {
    const [location, setLocation] = useState('');
    return (
        <View style={{ height: 400 }}>
            <Text style={styles.title}>Weather</Text>
            <GooglePlacesAutocomplete placeholder='Search' fetchDetails={true}
                onPress={(data, details = null) => {
                    setLocation(details.geometry.location)
                }}
                query={{
                    key: 'MY_SECRET_KEY',
                    language: 'en',
                }}
            />
            <Button title='Search' style={{ marginBottom: 50 }} onPress={() => navigation.navigate('Display', { location })} />
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


// 