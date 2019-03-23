import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const LoadComponent = () => (
    <View style={styles.container}>
        <ActivityIndicator size='large' color='red' />
    </View>
);

export default LoadComponent