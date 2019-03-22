import React, { Component } from 'react'
import { StyleSheet, Image, SafeAreaView, View, ScrollView, Text } from 'react-native';
import { getHeroDetails } from '../../repository/actions/HeroActions';
import { connect } from 'react-redux';
import { generateImageURI } from '../utils/ImageUtils';
import { FlatList } from 'react-native-gesture-handler';
import ComicCard from '../comic/ComicCard';


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
        const { heroById, navigation } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                {heroById && (
                    <ScrollView style={{ flex: 1 }}>
                        <View style={styles.containerImage}>
                            <Image source={{ uri: generateImageURI(heroById.thumbnail) }} style={styles.photo} />
                        </View>
                        <View style={styles.containerContent}>
                            <View style={styles.containerDescription}>
                                <Text style={styles.title}>Description</Text>
                                <Text style={styles.description}>
                                    {heroById.description || "Description not available"}
                                </Text>
                            </View>
                            <View style={styles.divider} />
                            <View style={styles.containerComics}>
                                <Text style={{ ...styles.title, marginLeft: 16 }}>
                                    Comics
                                </Text>
                                <FlatList
                                    keyExtractor={(item, index) => item.id.toString()}
                                    style={styles.comicList}
                                    horizontal={true}
                                    data={heroById.comics.items}
                                    renderItem={comic => <ComicCard item={comic.item} navigation={navigation}/>}
                                />
                            </View>
                        </View>

                    </ScrollView>
                )}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    containerImage: {
        flex: 1
    },
    container: {
        flex: 1
    },
    containerContent: {
        marginTop: 16,
        flex: 2,

    },
    containerDescription: {
        alignContent: 'center',
        alignItems: 'center',
    },
    containerComics: {
        flex: 1,
        paddingTop: 48,
    },
    photo: {
        flex: 1,
        height: 200,
        width: null
    },
    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },

    description: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        textAlign: 'center'
    },
    divider: {
        flex: 1,
        width: null,
        height: 2,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 32,
        backgroundColor: '#aaa'
    },
    comicList: {
        marginTop: 16,
        marginBottom: 8
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
