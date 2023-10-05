import { CLEAN_DETAIL, GET_DETAIL, GET_USERS, SEARCH_NAME } from "./actions";

const initialState = {
    countries: [],
    countriesCopy: [],
    countryDetail: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_USERS:
            return { 
                ...state, 
                countries: payload,
                countriesCopy: payload 
            };
        
        case GET_DETAIL:
            return {
                ...state,
                countryDetail: payload
            }

        case SEARCH_NAME:
            return {
                ...state,
                countries: payload
            }
        
        case CLEAN_DETAIL:
            return {
                ...state,
                countryDetail: []
            }

        default:
            return {
                ...state 
            };
    }
}

export default rootReducer;