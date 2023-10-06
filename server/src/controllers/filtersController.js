const {Country, Activity} = require('../db');
const { Op } = require('sequelize');


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
            include: Country
        });

        if(type.length === 0) {
            throw new Error(error)
        }

        return type;

    } catch (error) {
        throw new Error('Activity type not found');
    }
}

// const activityTypeOther = async (name) => {
//     try {
        
//         const others = await Activity.findAll({
//             where: {
//                 [Op.notLike]: `%${name}%` 
//             }
//         })

//         return others;

//     } catch (error) {
//         throw new Error('Just one activity');
//     }
// }

module.exports = {filterContinent, orderByName, orderPopulation, activityType};