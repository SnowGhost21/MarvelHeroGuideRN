import React, { Component } from 'react';
import { StyleSheet, Image, SafeAreaView } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation'


export default class SplashScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null
        }
    }

    componentDidMount() {
        const { navigation } = this.props;
        setTimeout(() => {
            navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({
                        routeName: 'Home'
                    })
                ]
            }));
        }, 3000);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image source={require('../../../imgs/ic_logo.png')} style={styles.logo} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },

    logo: {
        width: 200,
        height: 200,
    },
})