const { Country, Activity } = require('../db');
// const axios = require('axios');
const { Op } = require('sequelize');

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

        const findId = await Country.findByPk(id, {
            include: Activity
        });

        return findId;

    } catch (error) {
        throw new Error(error);
    }
}

const getNameCountries = async (name) => {

    try {

        // console.log(Country.dataValues.name);
        // const findName = await Country.filter((country) => country.dataValues.name === name);

        const findName = await Country.findOne({
            where: {
                name: name.toUpperCase()
            }
        });

        return findName;

    } catch (error) {
        throw new Error('not find name');
    }
}



module.exports = { getAllCountries, getCountriesById, getNameCountries };