import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default function MapsScreen({ navigation }) {

    const [latitude, setLatitude] = useState(parseFloat(navigation.getParam('lat')));
    const [longitude, setLongitude] = useState(parseFloat(navigation.getParam('lng')));

    useEffect(() => {
        setLatitude(parseFloat(navigation.getParam('lat')));
        setLongitude(parseFloat(navigation.getParam('lng')));
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0522,
                longitudeDelta: 0.0021,
                }}
                style={styles.map}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1
    }
})

MapsScreen.navigationOptions = ({ navigation }) => ({
    title: 'Show Maps',
});