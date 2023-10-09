import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const GET_CONTINENTS = 'GET_CONTINENTS';
export const GET_DETAIL = 'GET_DETAIL';
export const SEARCH_NAME = 'SEARCH_NAME';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const FILTER_CONTINENT = 'FILTER_CONTINENT';
export const ORDER_NAME = 'ORDER_NAME';
export const ORDER_POPULATION = 'ORDER_POPULATION';
export const FILTER_CONTINENT_ORDER_NAME_AZ = 'FILTER_CONTINENT_ORDER_NAME_AZ';
export const FILTER_CONTINENT_ORDER_NAME_ZA = 'FILTER_CONTINENT_ORDER_NAME_ZA';
export const FILTER_CONTINENT_POPULATION_A = 'FILTER_CONTINENT_POPULATION_A';
export const FILTER_CONTINENT_POPULATION_D = 'FILTER_CONTINENT_POPULATION_D';
export const ACTIVITY_TYPE = 'ACTIVITY_TYPE';

export const getCountries = () => {
    return async function (dispatch) {
        const { data } = await axios('http://localhost:3001/countries');
        dispatch({
            type: GET_USERS,
            payload: data
        });
    };
};

export const getActivities = () => {
    return async function (dispatch) {
        const { data } = await axios('http://localhost:3001/activities');
        dispatch({
            type: GET_ACTIVITIES,
            payload: data
        })
    }
}

export const getContinents = () => {
    return async function (dispatch) {
        const { data } = await axios('http://localhost:3001/filter/continent');
        dispatch({
            type: GET_CONTINENTS,
            payload: data
        })
    }
}

export const detailCountries = (countryID) => {
    return async function (dispatch) {
        const { data } = await axios(`http://localhost:3001/countries/${countryID}`);
        dispatch({
            type: GET_DETAIL,
            payload: data
        })
    }
}

export const searchByName = (countryName) => {
    return async function (dispatch) {
        const { data } = await axios(`http://localhost:3001/countries/?name=${countryName}`);
        dispatch({
            type: SEARCH_NAME,
            payload: data
        })

    }
}

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL
    }
}

export const filterContinent = (continent) => {
    return async function (dispatch) {
        const { data } = await axios(`http://localhost:3001/filter/continent/${continent}`);
        dispatch({
            type: FILTER_CONTINENT,
            payload: data
        })
    }
}

export const filterContinentOrderNameAZ = (continent) => {
    return async function (dispatch) {
        const { data } = await axios(`http://localhost:3001/filter/continent/${continent}`);

        dispatch({
            type: FILTER_CONTINENT_ORDER_NAME_AZ,
            payload: data
        })
    }
}

export const filterContinentOrderNameZA = (continent) => {
    return async function (dispatch) {
        const { data } = await axios(`http://localhost:3001/filter/continent/${continent}`);

        dispatch({
            type: FILTER_CONTINENT_ORDER_NAME_ZA,
            payload: data
        })
    }
}

export const filterContinentPopulationA = (continent) => {
    return async function (dispatch) {
        const { data } = await axios(`http://localhost:3001/filter/continent/${continent}`);

        dispatch({
            type: FILTER_CONTINENT_POPULATION_A,
            payload: data
        })
    }
}

export const filterContinentPopulationD = (continent) => {
    return async function (dispatch) {
        const { data } = await axios(`http://localhost:3001/filter/continent/${continent}`);

        dispatch({
            type: FILTER_CONTINENT_POPULATION_D,
            payload: data
        })
    }
}

export const orderName = (order) => {
    return async function (dispatch) {
        const { data } = await axios(`http://localhost:3001/filter/orderName/${order}`);
        dispatch({
            type: ORDER_NAME,
            payload: data
        })
    }
}

export const orderPopulation = (order) => {
    return async function (dispatch) {
        const { data } = await axios(`http://localhost:3001/filter/orderPopulation/${order}`);
        dispatch({
            type: ORDER_POPULATION,
            payload: data
        })
    }
}

export const activityType = (type) => {
    return async function (dispatch) {
        const { data } = await axios(`http://localhost:3001/filter/activityName/${type}`);
        dispatch({
            type: ACTIVITY_TYPE,
            payload: data
        })
    }
}

