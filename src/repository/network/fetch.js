import md5 from 'md5';

export const fetchJSON = (...args) => {
    return new Promise((resolve, reject) => {
        fetch(...args)
            .then(result => result.json())
            .then(json => resolve(json))
            .catch(err => reject(err));
    });
};


const API_KEY = "e7e793e397c66bb123d49a52b1f8eefc";
const PRIVATE_KEY = "d1bc9027b4b2ed2efa972b9ec37a1d71cabc2059";

export const BASE_URL = `https://gateway.marvel.com:443/v1/public/`;

export function generateQueryMap() {
    const queryMap = new Map();
    const time = new Date().getTime();

    queryMap.set("ts", time)
    queryMap.set("apikey", API_KEY)
    queryMap.set("hash", md5(time + PRIVATE_KEY + API_KEY));
    return queryMap;
}