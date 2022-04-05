import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import moment from 'moment';


const WeeklyForecast = ({ data }) => {
    return (
        <View style={[styles.infoContainer, styles.shadowProp]}>
            <Text style={[styles.text, { padding: 5 }]}>7 Days Forecast</Text>
            <View style={{
                height: 1,
                backgroundColor: 'rgba(255, 255, 255 ,0.3)',
                alignSelf: 'stretch',
            }} />
            <ScrollView>
                <View>
                    {data.daily.map((data, index) => {
                        return (
                            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }} key={index}>
                                <Text style={styles.text}>{moment.unix(data.dt).format('ddd')}</Text>
                                <Image source={{ uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` }} style={{ width: 30, height: 30 }} />
                                <Text style={styles.text}>Low: {Math.ceil(data.temp.min)}°</Text>
                                <Text style={styles.text}>High: {Math.ceil(data.temp.max)}°</Text>
                            </View>
                        )
                    })}
                </View>
            </ScrollView >
        </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        backgroundColor: '#E47EB3',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical: 5,
    }
})

export default WeeklyForecast;