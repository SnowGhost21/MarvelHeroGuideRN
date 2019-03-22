import { fetchHeros, fetchHeroById, fetchComicsByHeroId } from '../network/index';

export const dispatchHeroes = heroes => ({
    type: "RETRIEVE_HEROS",
    payload: heroes
});

export const configureOffset = offset => ({
    type: "SET_OFFSET",
    payload: offset
})

export const heroById = hero => ({
    type: "HERO_BY_ID",
    payload: hero
})

export const retrieveHeros = (limit, offset) => {
    return dispatch => {
        fetchHeros(limit, offset)
            .then(response => {
                const heroes = response.data.results
                dispatch(dispatchHeroes(heroes));
                dispatch(configureOffset(offset += limit))
            })
            .catch(error => console.log(error))
    }
}

export const getHeroDetails = heroId => {
    return dispatch => {
        fetchHeroById(heroId)
            .then(response => {
                let hero = response.data.results[0];
                fetchComicsByHeroId(heroId)
                    .then(responseComics => {
                        const comics = responseComics.data.results;
                        hero.comics.items = comics;
                        dispatch(heroById(hero));
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }
}