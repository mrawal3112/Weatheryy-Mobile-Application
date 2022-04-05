import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import moment from 'moment';
import InfoPills from '../components/InfoPills';
import HourlyData from '../components/HourlyData';
import WeeklyForecast from '../components/WeeklyForecast';
import { ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native';

const { Height } = Dimensions.get('window')
const DisplayScreen = () => {
    const [information, setInformation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [weatherForecast, setWeatherForecast] = useState(null)
    const API_KEY = '127e886467e938b1f62145c8b4ddbc2f';
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            const CityInfo = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}&units=metric`).then(response => response.json());
            setInformation(CityInfo)
            const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.coords.latitude}&lon=${location.coords.longitude}&exclude=alerts,minutely&appid=${API_KEY}&units=metric`).then(response => response.json())
            setWeatherForecast(weatherData);
            //  
        })();
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {!weatherForecast ? <View style={[styles.loaderContainer, styles.horizontal]} >
                <ActivityIndicator size='large' color="#de5fa0" style={styles.loader} />
            </View> : <View style={styles.container}>
                <View style={{ margin: 15 }}>
                    <Text style={{ fontSize: 16 }}>{moment().format('MMMM Do YYYY')}</Text>
                    <Text style={{ fontSize: 30, marginTop: 5, color: '#de5fa0' }}>{information.name}</Text>
                </View>

                <View style={styles.InfoContainer}>
                    <View >
                        <Image source={{ uri: `http://openweathermap.org/img/wn/${information.weather[0].icon}@2x.png` }} style={{ width: 150, height: 150 }} />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.temp}>{Math.ceil(weatherForecast.daily[0].temp.day)}°</Text>
                        <Text style={{ textTransform: 'capitalize', fontSize: 16 }}>{information.weather[0].description}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-evenly", marginTop: 20 }}>
                    <Text style={{ fontSize: 16 }}><Text style={styles.colors}>Low:</Text> {Math.ceil(weatherForecast.daily[0].temp.min)}°</Text>
                    <Text style={{ fontSize: 16 }}><Text style={styles.colors}>High:</Text> {Math.ceil(weatherForecast.daily[0].temp.max)}°</Text>
                    <Text style={{ fontSize: 16 }}><Text style={styles.colors}>Feels Like:</Text> {Math.ceil(information.main.feels_like)}°</Text>
                </View>
                <View>
                    <InfoPills data={weatherForecast} />
                </View>
                <View>
                    <HourlyData data={weatherForecast} />
                </View>
                <View>
                    <WeeklyForecast data={weatherForecast} />
                </View>
            </View>
            }
        </ScrollView >
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    InfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    temp: {
        fontSize: 70,
        color: '#de5fa0'
    },
    colors: {
        color: '#de5fa0',
        fontWeight: "bold"
    },
    loaderContainer: {
        height: Height,
        backgroundColor: '#fff'
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        paddingVertical: '95%',
    },
})

export default DisplayScreen;