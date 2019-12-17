import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, View, Text } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { Team } from '../Team';

export default function ListScreen({ navigation }) {

    const [data, setData] = useState(Team);
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        setData(Team);
        setShowLoading(false);
    }, []);

    if(showLoading === true){
        return(
            <View style={styles.activity}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
    }

    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            leftAvatar={{ source: item.image }}
            onPress={() => {
                navigation.navigate('Details', {
                    id: `${item.id}`,
                });
            }}
            chevron
            bottomDivider
        />
    )

    return (
        <FlatList
            keyExtractor={keyExtractor}
            data={data}
            renderItem={renderItem}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
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
    message: {
        padding: 16,
        fontSize: 18,
        color: 'red'
    }
});

ListScreen.navigationOptions = ({ navigation }) => ({
    title: 'Premier League'
});