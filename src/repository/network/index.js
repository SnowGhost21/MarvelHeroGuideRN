import { fetchJSON, generateQueryMap, BASE_URL } from './fetch';

export const fetchHQS = (limit, offset) => {
    const parameters = generateQueryMap();
    parameters.set("limit", limit.toString());
    parameters.set("offset", offset.toString());
    let queryUrl = 'characters?'
    for (const [key, value] of parameters) {
        queryUrl = queryUrl + `${key}=${value}&`
    }
    const url = BASE_URL + queryUrl
    console.log(url);

    return fetchJSON(url)
}
