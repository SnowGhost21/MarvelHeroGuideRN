import React, { Component } from 'react';
import { StyleSheet, Image, SafeAreaView, View, FlatList, ActivityIndicator } from 'react-native';
import { retrieveHqs } from '../../repository/actions/HQActions';
import { connect } from 'react-redux';
import HeroCard from '../components/HeroCard';

class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home',
      };

    constructor(props) {
        super(props);
        this.getComics = this.getComics.bind(this);
        this.state = {
            limit: 20,
            offset: 0,
            isLoading: false
        }
    }

    renderFooter = () => {
        if (!this.state.isLoading) return null;
        return (
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
        );
    };


    componentDidMount() {
        this.getComics();
    }

    componentWillReceiveProps(nextProps) {
        const { offset, error } = nextProps;
        if (offset > this.state.offset || error) {
            this.setState({ offset: offset, isLoading: false });
        }
    }

    getComics() {
        const { retrieveComics } = this.props;
        const { limit, offset } = this.state;
        this.setState({ isLoading: true })
        retrieveComics(limit, offset)
    }

    render() {
        const { comicBooks } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1 }}>
                    {comicBooks.length > 0 &&
                        <FlatList
                            data={comicBooks}
                            keyExtractor={(item, index) => item.id}
                            renderItem={hero => <HeroCard item={hero.item} />}
                            onEndReached={this.getComics}
                            onEndReachedThreshold={0.01}
                            ListFooterComponent={this.renderFooter}
                        />
                    }
                </View>
            </SafeAreaView>
        )
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
    retrieveComics: (limit, offset) => {
        dispatch(retrieveHqs(limit, offset));
    }
})

const mapStateToProps = ({ marvelHqs }) => ({
    comicBooks: marvelHqs.hqs,
    offset: marvelHqs.offset
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
