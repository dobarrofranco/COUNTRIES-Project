const { Activity, Country } = require('../db');

const postActivity = async (name, difficulty, duration, season, countries ) => {

    try {
    
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
        throw new Error(error)
    }
}







module.exports = { postActivity, getActivity};

//! sant code postActivity
// try {
//     const { name, difficulty, duration, season, countries } = activityData;
//     const newActivity = await activityM.create({
//       name,
//       difficulty,
//       duration,
//       season,
//       countries
//     });
//     if (countries && countries.length > 0) {

//       const countriesToRelate = await countryM.findAll({
//         where: {
//           id: countries,
//         },
//       });
//   await newActivity.setCountries(countriesToRelate);
//     }
//     return newActivity;
//   } catch (error) {
//     throw error; 
//   }
// };

//! byron code postActivity

    // const { name, difficulty, duration, season, countryId } = req.body;

    // if (!req.body) return res.status(404).json({ error: "not found" });
    // if (difficulty > 5 || difficulty <= 0) return res.status(400).json({ error: "difficulty not valid" });
 
    // const t = await conn.transaction();


    // try {
    //     const [newActivity, created] = await Activity.findOrCreate({
    //         where: {
    //             name, difficulty, duration, season
    //         },
    //         transaction: t
    //     });

    //     if (countryId && Array.isArray(countryId)) {
    //         for (let i = 0; i < countryId.length; i++) {
    //             const country = await Country.findByPk(countryId[i], { transaction: t });
    //             if (!country) {
    //                 await t.rollback();
    //                 return res.status(404).json({ error: `Country with ID ${countryId[i]} not found` });
    //             }
    //             await newActivity.addCountry(country, { transaction: t });
    //         }
    //     }

    //     await t.commit();

    //     return res.status(200).json({ success: newActivity });
    // } catch (error) {
    //     await t.rollback();
    //     return res.status(500).json({ error: error.message });
    // }