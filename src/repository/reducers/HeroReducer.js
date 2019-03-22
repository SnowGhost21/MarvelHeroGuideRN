
export const initialState = {
    heroes: [],
    selectedHero: undefined
}

export default function hqReducer(state = initialState, action) {
    switch (action.type) {
        case "RETRIEVE_HEROS":
            return {
                ...state,
                heroes: state.heroes.concat(action.payload)
            };
        case "SET_OFFSET":
            return {
                ...state,
                offset: action.payload
            };
        case "HERO_BY_ID":
        return{
            ...state,
            selectedHero: action.payload
        }
        default:
            return state;
    }
}