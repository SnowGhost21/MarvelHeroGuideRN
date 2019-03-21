import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from './src/repository/reducers';
import SplashScreen from './src/view/splash/SplashScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/view/home/HomeScreen';

let store;
if (process.env.NODE_ENV === "production") {
    store = createStore(reducer, applyMiddleware(thunk));
} else {
    store = createStore(reducer, applyMiddleware(thunk, logger))
}

const stack = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,
    },
    Home: {
        screen: HomeScreen,
        title: 'Home'
    }
})

let Navigation = createAppContainer(stack);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        )
    }
}
