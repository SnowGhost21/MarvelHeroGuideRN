
export const initialState = {
    hqs: [],
    selectedHQ: {}
}

export default function hqReducer(state = initialState, action) {
    switch (action.type) {
        case "RETRIEVE_HQS":
            return {
                ...state,
                hqs: state.hqs.concat(action.payload)
            };
        case "SET_OFFSET":
            return {
                ...state,
                offset: action.payload
            };
        default:
            return state;
    }
}