import React, { Component } from 'react'
import { StyleSheet, Image, SafeAreaView, View, ScrollView, Text } from 'react-native';
import { getHeroDetails } from '../../repository/actions/HeroActions';
import { connect } from 'react-redux';
import { generateImageURI } from '../utils/ImageUtils';


class HeroDetail extends Component {

    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
        return {
            title: `${state.params.hero.name}`,
        };
    };

    componentWillMount() {
        const { retrieveHeroById, navigation } = this.props;
        const hero = navigation.getParam('hero', undefined);
        retrieveHeroById(hero.id);
    }

    render() {
        const { heroById } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                {heroById && (
                    <ScrollView style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <Image source={{ uri: generateImageURI(heroById.thumbnail) }} style={styles.photo} />
                        </View>
                        <View style={{ flex: 2 }}>
                            <Text>{heroById.name}</Text>
                        </View>
                    </ScrollView>
                )}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    photo: {
        flex: 1,
        height: 200,
        width: null
    }
})

const mapDispatchToProps = dispatch => ({
    retrieveHeroById: heroId => {
        dispatch(getHeroDetails(heroId));
    }
})

const mapStateToProps = ({ marvelHero }) => ({
    heroById: marvelHero.selectedHero
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeroDetail);
