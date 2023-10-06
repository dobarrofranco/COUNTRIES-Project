import { CLEAN_DETAIL, FILTER_CONTINENT, FILTER_CONTINENT_ORDER_NAME_AZ, FILTER_CONTINENT_ORDER_NAME_ZA, GET_DETAIL, GET_USERS, ORDER_NAME, ORDER_POPULATION, SEARCH_NAME } from "./actions";

const initialState = {
    countries: [],
    countriesCopy: [],
    countryDetail: [],
    continents: []
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
        
        case FILTER_CONTINENT:
            return {
                ...state,
                countries: payload,
                continents: payload
            }

        case FILTER_CONTINENT_ORDER_NAME_AZ:

            let sortedAZ = state.continents.sort((a, b) => a.name.localeCompare(b.name)); 
            
            return {
                ...state,
                countries: [...sortedAZ]
            }
        
        case FILTER_CONTINENT_ORDER_NAME_ZA:
            let sortedZA = state.continents.sort((a, b) => b.name.localeCompare(a.name));
            
            return {
                ...state,
                countries: [...sortedZA]
            }

        case ORDER_NAME:
            return {
                ...state,
                countries: payload
            }

        case ORDER_POPULATION:
            return {
                ...state,
                countries: payload
            }
        default:
            return {
                ...state 
            };
    }
}

export default rootReducer;