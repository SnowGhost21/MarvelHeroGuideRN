import { fetchJSON, generateQueryMap, BASE_URL } from './fetch';

export const fetchHeros = (limit, offset) => {
    const parameters = generateQueryMap();
    parameters.set("limit", limit.toString());
    parameters.set("offset", offset.toString());
    let queryUrl = 'characters?';
    for (const [key, value] of parameters) {
        queryUrl = queryUrl + `${key}=${value}&`
    }
    const url = BASE_URL + queryUrl

    return fetchJSON(url)
}

export const fetchHeroById = heroId => {
    const parameters = generateQueryMap();
    let queryUrl = `characters/${heroId}?`;
    for (const [key, value] of parameters) {
        queryUrl = queryUrl + `${key}=${value}&`
    }
    const url = BASE_URL + queryUrl
    return fetchJSON(url);
}

export const fetchComicsByHeroId = heroId => {
    const parameters = generateQueryMap();
    let queryUrl = `characters/${heroId}/comics?`;
    for (const [key, value] of parameters) {
        queryUrl = queryUrl + `${key}=${value}&`
    }
    const url = BASE_URL + queryUrl
    return fetchJSON(url);
}
