const { Activity, Country } = require('../db');
const { Op } = require('sequelize')

const postActivity = async (name, difficulty, duration, season, countries ) => {

    try {

        const newActivity = await Activity.create({
            name, difficulty, duration, season, countries
        })

        if (countries) {
            const selectedCountries = await Country.findAll({
                where: {
                    id: countries
                }
            });

            await newActivity.addCountries(selectedCountries);
        }
        
        return newActivity;

    } catch (error) {
        throw new Error('It was not possible to post the activity');
    }
    
}

const getActivity = async () => {
    try {
        
        const allActivities = await Activity.findAll({
            include: Country
        });

        return allActivities;

    } catch (error) {
        throw new Error('Activities could not be obtained');
    }
}

const deleteAllActivities = async () => {
    try {
        
        return await Activity.destroy({
            where: {},
        });

    } catch (error) {
        throw new Error('Activities could not be deleted');
    }
}

const deleteActivity = async (name) => {
    try {
        
        return await Activity.destroy({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        });

    } catch (error) {
        throw new Error('The activity could not be deleted');
    }
}


module.exports = { postActivity, getActivity, deleteAllActivities, deleteActivity};