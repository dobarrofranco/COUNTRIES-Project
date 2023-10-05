const { Country, Activity } = require('../db');

const getAllCountries = async () => {

    try {

        const countryFind = await Country.findAll({
            include: Activity
        });

        return countryFind;

    } catch (error) {
        throw new Error('No countries found');
    }

}

const getCountriesById = async (id) => {

    try {

        const findId = await Country.findByPk(id, {
            include: Activity
        });

        return findId;

    } catch (error) {
        throw new Error('No id found');
    }
}

const getNameCountries = async (name) => {
    const arr = []
    try {

        const findName = await Country.findOne({
            where: {
                name: name.toUpperCase()
            },
            include: Activity 
        });

        if (findName === null) {
            throw new Error('No names found');
        }
        
        arr.push(findName);
        return arr;

    } catch (error) {
        throw new Error('No names found');
    }
}



module.exports = { getAllCountries, getCountriesById, getNameCountries };