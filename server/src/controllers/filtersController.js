const { Country, Activity } = require('../db');


const filterContinent = async (continent) => {

    try {

        const countryContinent = await Country.findAll({
            where: {
                continents: continent
            }
        })

        return countryContinent;

    } catch (error) {
        throw new Error('not continents found')
    }
}

const getContinents = async () => {
    try {

        const allContinents = await Country.findAll({
            attributes: ['continents']
        })

        const continentCounts = {};

        // Filtrar el array para obtener objetos que no se repiten
        const uniqueObjects = allContinents.filter(obj => {
            const continent = obj.continents;

            // Si el continente aún no se ha visto, agregalo al objeto de seguimiento
            if (!continentCounts[continent]) { 
//* Si la propiedad "Oceania" (Oceania: undefined) es undefined. Le ponemos al objeto creado la propiedad Oceania: 1 y en uniqueObjets se agrega el objeto que estamos iterando y sino...
                continentCounts[continent] = 1;
                return true; // Mantén el objeto en la lista
            } else {
                //* Ese objeto no se agrega porque la propiedad Oceania ya no tiene el valor undefined al haberse ya iterado una primera vez
                return false; // Descarta el objeto porque ya se ha visto antes
            }
        });

        return uniqueObjects;

    } catch (error) {
        throw new Error('continents not found')
    }
}

const orderByName = async (order) => {

    try {


        if (order === 'A-Z') {
            const countries = await Country.findAll()
            const orderName = countries.sort((a, b) => a.name.localeCompare(b.name))
            return orderName;
        }

        else if (order === 'Z-A') {
            const countries = await Country.findAll()
            const orderName = countries.sort((a, b) => b.name.localeCompare(a.name))
            return orderName;
        }

    } catch (error) {
        throw new Error('order not found')
    }
}

const orderPopulation = async (order) => {
    try {

        if (order === 'A') {
            const countries = await Country.findAll()
            const orderName = await countries.sort((a, b) => b.population - a.population)
            return orderName;
        }

        else if (order === 'D') {
            const countries = await Country.findAll()
            const orderName = countries.sort((a, b) => a.population - b.population)
            return orderName;
        }

    } catch (error) {

    }
}

const activityType = async (name) => {
    try {

        const type = await Activity.findAll({
            where: {
                name: name
            },
            include: [
                {
                    model: Country,
                    attributes: ['name']
                }
            ]
        });

        if (type.length === 0) {
            throw new Error(error)
        }

        const cleanActivity = type.map((activity) => ({
            id: activity.id,
            name: activity.name,
            difficulty: activity.difficulty,
            duration: activity.duration,
            season: activity.season,
            countries: activity.Countries.map(country => country.name)
        }))

        return cleanActivity;

    } catch (error) {
        throw new Error('Activity type not found');
    }
}

module.exports = { filterContinent, orderByName, orderPopulation, activityType, getContinents };