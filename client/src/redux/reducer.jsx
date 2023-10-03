import { GET_DETAIL, GET_USERS } from "./actions";

const initialState = {
    countries: [],
    countryDetail: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_USERS:
            return { 
                ...state, 
                countries: payload 
            };
        
        case GET_DETAIL:
            return {
                ...state,
                countryDetail: payload
            }

        default:
            return {
                ...state 
            };
    }
}

export default rootReducer;