import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const GET_DETAIL = 'GET_DETAIL';
export const SEARCH_NAME = 'SEARCH_NAME';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';

export const getCountries = () => {
    return async function(dispatch) {
        const { data } = await axios('http://localhost:3001/countries');
        dispatch({ 
            type: GET_USERS, 
            payload: data
        });
    };  
};

export const detailCountries = (countryID) => {
    return async function(dispatch) {
        const { data } = await axios(`http://localhost:3001/countries/${countryID}`);
        dispatch({
            type: GET_DETAIL,
            payload: data
        })
    }
}

export const searchByName = (countryName) => {
    return async function(dispatch) {
        try {
            const { data } = await axios(`http://localhost:3001/countries/?name=${countryName}`);
            dispatch({
                type: SEARCH_NAME,
                payload: data
            })
        } catch (error) {
            
        }
    }
}

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL
    }
}