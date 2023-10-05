const {Country, Activity} = require('../db');

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

const orderByName = async (order) => {

    try {
        
        
        if (order === 'A') {
            const countries = await Country.findAll()
            const orderName = countries.sort((a, b) => a.name.localeCompare(b.name))
            return orderName;
        }

        else if (order === 'B') {
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

        else if (order === 'B') {
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
            include: Country
        });

        return type;

    } catch (error) {
        throw new Error('Activity type not found');
    }
}

module.exports = {filterContinent, orderByName, orderPopulation, activityType};