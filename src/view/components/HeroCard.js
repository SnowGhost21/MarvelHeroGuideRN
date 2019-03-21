import { StyleSheet, Image, View, Text } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
});

function createImageUri(thumbnail) {
    const response = (`${thumbnail.path}.${thumbnail.extension}`).replace('http', 'https');
    console.log(response);
    return response;

}

const HeroCard = ({ item }) => (
    <View style={styles.container}>
        <Image source={{ uri: createImageUri(item.thumbnail) }} style={styles.photo} />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {item.name}
            </Text>
            <Text style={styles.description}>
                {item.description || "Description not available"}
            </Text>
        </View>
    </View>
);


export default HeroCard;