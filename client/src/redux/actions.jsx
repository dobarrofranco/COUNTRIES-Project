import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const GET_DETAIL = 'GET_DETAIL';

export const getCountries = () => {
    return async function(dispatch) {
        const { data } = await axios('http://localhost:3001/countries');
        dispatch({ 
            type: GET_USERS, 
            payload: data.countries
        });
    };  
};

export const detailCountries = (countryID) => {
    return async function(dispatch) {
        const { data } = await axios(`http://localhost:3001/countries/${countryID}`);
        dispatch({
            type: GET_DETAIL,
            payload: data.countries
        })
    }
}