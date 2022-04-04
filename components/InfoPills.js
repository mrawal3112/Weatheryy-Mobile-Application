import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import d2d from 'degrees-to-direction';
import moment from 'moment';

const InfoPills = ({ data }) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row' }}>
                <View style={[styles.infoContainer, styles.shadowProp]}>
                    <Image source={require('../assets/wind.png')} style={styles.image} />
                    <Text style={styles.title}>Wind Speed</Text>
                    <Text style={styles.value}>{Math.ceil((data.current.wind_speed) * 3.6)} Km/h {d2d(data.current.wind_deg)} </Text>
                </View>
                <View style={[styles.infoContainer, styles.shadowProp]}>
                    <Image source={require('../assets/cloud.png')} style={styles.image} />
                    <Text style={styles.title}>Humidity</Text>
                    <Text style={styles.value}>{data.current.humidity}%</Text>
                </View>
                <View style={[styles.infoContainer, styles.shadowProp]}>
                    <Image source={require('../assets/gauge.png')} style={styles.image} />
                    <Text style={styles.title}>Pressure</Text>
                    <Text style={styles.value}>{data.current.pressure} hPa</Text>
                </View>
                <View style={[styles.infoContainer, styles.shadowProp]}>
                    <Image source={require('../assets/mist.png')} style={styles.image} />
                    <Text style={styles.title}>Visibility</Text>
                    <Text style={styles.value}>{(data.current.visibility) / 1000} km</Text>
                </View>
                <View style={[styles.infoContainer, styles.shadowProp]}>
                    <Image source={require('../assets/sunrise.png')} style={styles.image} />
                    <Text style={styles.title}>Sunrise</Text>
                    <Text style={styles.value}>{moment.unix(data.daily[0].sunrise).format('LT')}</Text>
                </View>
                <View style={[styles.infoContainer, styles.shadowProp]}>
                    <Image source={require('../assets/ocean.png')} style={styles.image} />
                    <Text style={styles.title}>Sunset</Text>
                    <Text style={styles.value}>{moment.unix(data.daily[0].sunset).format('LT')}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
    },
    infoContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginVertical: 25,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    title: {
        fontSize: 16,
        color: '#de5fa0',
        textAlign: 'center',
        marginTop: 5
    },
    value: {
        fontSize: 20,
        textAlign: 'center'
    }
})

export default InfoPills;