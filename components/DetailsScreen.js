import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Image, View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { Team } from '../Team';

export default function DetailsScreen({ navigation }) {

    const [details, setDetails] = useState({
        id: null,
        name: '',
        image: '',
        location: '',
        stadium: '',
        capacity: null,
        manager: '',
        captain: '',
        lat: null,
        lng: null
    });

    useEffect(() => {
        const id = parseInt(navigation.getParam('id'), 0);
        setDetails(Team.find(x => x.id === id));
    }, []);

    return (
        <ScrollView>
            <Card style={styles.container}>
                <View style={styles.subContainer}>
                <View style={styles.detailsImage}>
                    <Image
                    style={{minWidth: 150, minHeight: 150}}
                    source={details.image}
                    />
                </View>
                <View style={styles.detailsItem}>
                    <Text style={{fontSize: 16}}>Team Name: {details.name}</Text>
                </View>
                <View style={styles.detailsItem}>
                    <Text style={{fontSize: 16}}>City: {details.location}</Text>
                </View>
                <View style={styles.detailsItem}>
                    <Text style={{fontSize: 16}}>Stadium: {details.stadium}</Text>
                </View>
                <View style={styles.detailsItem}>
                    <Text style={{fontSize: 16}}>Stadium Capacity: {details.capacity}</Text>
                </View>
                <View style={styles.detailsItem}>
                    <Text style={{fontSize: 16}}>Manager: {details.manager}</Text>
                </View>
                <View style={styles.detailsItem}>
                    <Text style={{fontSize: 16}}>Team Captain: {details.captain}</Text>
                </View>
                </View>
                <View style={styles.detailButton}>
                    <Button
                        large
                        buttonStyle={{backgroundColor: '#19AC52'}}
                        icon={
                            <Icon
                              name="map"
                              size={32}
                              color="white"
                            />
                        }
                        title='Show Maps'
                        onPress={() => {
                            navigation.navigate('Maps', {
                                lat: `${details.lat}`,
                                lng: `${details.lng}`
                            });
                        }} />
                </View>
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    subContainer: {
        flex: 1,
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#CCCCCC',
    },
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsItem: {
        marginBottom: 5
    },
    detailsImage: {
        minHeight: 150,
        minWidth: 150,
        marginBottom: 10,
        alignItems: 'center'
    },
    detailButton: {
        marginTop: 10
    }
})

DetailsScreen.navigationOptions = ({ navigation }) => ({
    title: 'Team Details',
});