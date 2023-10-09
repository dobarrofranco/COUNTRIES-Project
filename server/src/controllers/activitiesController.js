const { Activity, Country } = require('../db');

const postActivity = async (name, difficulty, duration, season, countries ) => {

    try {

        const newActivity = await Activity.create({
            name, difficulty, duration, season, countries
        })

        if (countries && countries.length > 0) {
            const selectedCountries = await Country.findAll({
                where: {
                    name: countries.toUpperCase()
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

const deleteActivity = async (id) => {
    try {
        
        return await Activity.destroy({
            where: {
                id: id
            }
        });

    } catch (error) {
        throw new Error('The activity could not be deleted');
    }
}


module.exports = { postActivity, getActivity, deleteAllActivities, deleteActivity};