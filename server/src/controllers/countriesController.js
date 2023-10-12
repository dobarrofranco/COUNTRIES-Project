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
            include: [
                {
                    model: Activity,
                    attributes: ['name', 'difficulty', 'duration', 'season']
                }
            ]
        });

        const countryDetail = [findId]

        const cleanCountry = countryDetail.map((country) => ({
            id: country.id,
            name: country.name,
            image: country.image,
            continents: country.continents,
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            population: country.population,
            activities: country.Activities.map((activity) => ({
                name: activity.name,
                difficulty: activity.difficulty,
                duration: activity.duration,
                season: activity.season
            }))
        }))

        return cleanCountry;

    } catch (error) {
        throw new Error(error);
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