import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { generateImageURI } from '../utils/ImageUtils';

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
    containerText: {
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

const HeroCard = ({ item, navigation }) => (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('HeroDetail', {
        hero: item
    })}>
        <Image source={{ uri: generateImageURI(item.thumbnail) }} style={styles.photo} />
        <View style={styles.containerText}>
            <Text style={styles.title}>
                {item.name}
            </Text>
            <Text style={styles.description}>
                {item.description || "Description not available"}
            </Text>
        </View>
    </TouchableOpacity>
);


export default HeroCard;