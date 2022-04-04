
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import moment from 'moment';

const HourlyData = ({ data }) => {
    return (
        <View style={[styles.infoContainer, styles.shadowProp]}>
            <Text style={[styles.text, { padding: 5 }]}>Hourly Forecast</Text>
            <View style={{
                height: 1,
                backgroundColor: 'rgba(255, 255, 255 ,0.3)',
                alignSelf: 'stretch',

            }} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    {data.hourly.map((data, index) => {
                        return (
                            <View style={{ padding: 10 }} key={index}>
                                <Text style={styles.text}>{moment.unix(data.dt).format('hA')}</Text>
                                <Image source={{ uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` }} style={{ width: 30, height: 30 }} />
                                <Text style={styles.text}>{Math.ceil(data.temp)}°</Text>
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
        backgroundColor: '#de5fa0',
        borderRadius: 10,
        padding: 10,
        marginVertical: 25,
        marginHorizontal: 10,
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
        marginVertical: 5
    }
})


export default HourlyData;