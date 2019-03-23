import React, { Component } from 'react';
import { StyleSheet, Image, SafeAreaView, View, FlatList, ActivityIndicator } from 'react-native';
import { retrieveHeros } from '../../repository/actions/HeroActions';
import { connect } from 'react-redux';
import HeroCard from '../hero/HeroCard';
import LoadComponent from '../custom/LoadComponent';

class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
        this.getHeros = this.getHeros.bind(this);
        this.state = {
            limit: 20,
            offset: 0,
            isLoading: true,
            footerLoading: false
        }
    }

    renderFooter = () => {
        if (!this.state.footerLoading) return null;
        return (
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
        );
    };


    componentDidMount() {
        this.getHeros();
    }

    componentWillReceiveProps(nextProps) {
        const { offset, error } = nextProps;
        if (offset > this.state.offset || error) {
            this.setState({ offset: offset, isLoading: false, footerLoading: false });
        }
    }

    getHeros() {
        const { retrieveHero } = this.props;
        const { limit, offset } = this.state;
        this.setState({ offset: offset, isLoading: false, footerLoading: true });
        retrieveHero(limit, offset)
    }

    render() {
        const { heroes, navigation } = this.props;
        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <SafeAreaView style={styles.container}>
                    <LoadComponent />
                </SafeAreaView>
            )
        } else {
            return (
                <SafeAreaView style={styles.container}>
                    <View style={{ flex: 1 }}>
                        {heroes.length > 0 &&
                            <FlatList
                                data={heroes}
                                keyExtractor={(item, index) => item.id.toString()}
                                renderItem={hero => <HeroCard item={hero.item} navigation={navigation} />}
                                onEndReached={this.getHeros}
                                onEndReachedThreshold={0.01}
                                ListFooterComponent={this.renderFooter}
                            />
                        }
                    </View>
                </SafeAreaView>
            )
        }


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loading: {
        alignSelf: 'center',
        marginVertical: 20,
    },
})

const mapDispatchToProps = dispatch => ({
    retrieveHero: (limit, offset) => {
        dispatch(retrieveHeros(limit, offset));
    }
})

const mapStateToProps = ({ marvelHero }) => ({
    heroes: marvelHero.heroes,
    offset: marvelHero.offset
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
