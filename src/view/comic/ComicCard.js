import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { generateImageURI } from '../utils/ImageUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 264,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
        paddingBottom: 8,
    },
    title: {
        marginTop: 16,
        fontSize: 16,
        color: '#000',
    },
    containerText: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 16,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 8,
    },
    description: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 16,
    },
    photo: {
        width: 264,
        height: 192,
        borderRadius: 25
    },
});


const ComicCard = ({ item, navigation }) => (
    <TouchableOpacity style={styles.container}>
        <Image source={{ uri: generateImageURI(item.thumbnail) }} style={styles.photo} />
        <View style={styles.containerText}>
            <Text style={styles.title}>
                {item.title}
            </Text>
            <Text
            ellipsizeMode='tail'
                numberOfLines={3}
                style={styles.description}>
                {item.description || "Description not available"}
            </Text>
        </View>
    </TouchableOpacity>
);

export default ComicCard;