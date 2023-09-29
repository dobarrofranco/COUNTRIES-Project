const { Activity, Country } = require('../db');

const postActivity = async (name, difficulty, duration, season, countries ) => {

    try {

        // const repeatedName = await Activity.findAll({
        //     where: {
        //         name: name
        //     }
        // })    

        // if (repeatedName.length > 1 ) {
        //     await Activity.destroy({
        //         where: {
        //                 name: name
        //         }
        //     })
        //     throw new Error('The name of that activity has already been created');
        // }

        const newActivity = await Activity.create({
            name, difficulty, duration, season, countries
        })

        if (countries && countries.length > 0) {
            const selectedCountries = await Country.findAll({
                where: {
                    id: countries
                }
            });

            await newActivity.addCountries(selectedCountries);
        }
        
        return newActivity;

    } catch (error) {
        throw new Error(error.message);
    }
    
}

const getActivity = async () => {
    try {
        
        const allActivities = await Activity.findAll();

        return allActivities;

    } catch (error) {
        throw new Error(error);
    }
}

const deleteAllActivities = async () => {
    try {
        
        return await Activity.destroy({
            where: {},
        });

    } catch (error) {
        throw new Error(error);
    }
}


module.exports = { postActivity, getActivity, deleteAllActivities};