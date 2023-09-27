const { Country } = require('../db');
// const axios = require('axios');
const { Op } = require('sequelize')

const getAllCountries = async () => {

    try {
        
        const countryFind = await Country.findAll();

        return countryFind;

    } catch (error) {
        throw new Error('No se encontraron paises - ');
    }

}

const getCountriesById = async (id) => {
    
    try {

        const findId = await Country.findByPk(id);

        return findId;

    } catch (error) {
        throw new Error(error);
    }
}

const getNameCountries = async (name) => {
    
    try {

        const findName = await Country.findOne({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
       });

       console.log(findName);

       return findName;

    } catch (error) {
        throw new Error('not find name');
    }
}



module.exports = {getAllCountries, getCountriesById, getNameCountries};