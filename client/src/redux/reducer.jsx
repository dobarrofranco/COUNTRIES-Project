import { ACTIVITY_TYPE, CLEAN_DETAIL, FILTER_CONTINENT, FILTER_CONTINENT_ORDER_NAME_AZ, FILTER_CONTINENT_ORDER_NAME_ZA, FILTER_CONTINENT_POPULATION_A, FILTER_CONTINENT_POPULATION_D, GET_ACTIVITIES, GET_DETAIL, GET_USERS, ORDER_NAME, ORDER_POPULATION, SEARCH_NAME } from "./actions";

const initialState = {
    countries: [],
    countriesCopy: [],
    countryDetail: [],
    continents: [],
    activities: [],
    activityType: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_USERS:
            return { 
                ...state, 
                countries: payload,
                countriesCopy: payload 
            };

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: payload
            }
        
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
        
        case FILTER_CONTINENT_POPULATION_A:
            let sortedA = state.continents.sort((a, b) => b.population - a.population);

            return {
                ...state,
                countries: [...sortedA]
            }
        
        case FILTER_CONTINENT_POPULATION_D:
            let sortedD = state.continents.sort((a, b) => a.population - b.population);

            return {
                ...state,
                countries: [...sortedD]
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

        case ACTIVITY_TYPE:
            return {
                ...state,
                activityType: payload
            }

        default:
            return {
                ...state 
            };
    }
}

export default rootReducer;