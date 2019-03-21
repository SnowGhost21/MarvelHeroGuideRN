import { fetchHQS } from '../network/index';

export const fetchHqs = hqs => ({
    type: "RETRIEVE_HQS",
    payload: hqs
});

export const configureOffset = offset => ({
    type: "SET_OFFSET",
    payload: offset
})

export const retrieveHqs = (limit, offset) => {
    return dispatch => {
        fetchHQS(limit, offset)
            .then(response => {
                const hqs = response.data.results
                dispatch(fetchHqs(hqs));
                dispatch(configureOffset(offset += limit))
            })
            .catch(error => console.log(error))
    }
}