const {Country} = require('../db');

const allCountries = async (req, res) => {
    
    const {id, name, image, continents, capital, subregion, area, population} = req.body;

    try {
        
        if (!id || !name || !image || !continents || !capital || !subregion || !area || !population) {
            return res.status(401).send('Faltan datos');
        }

        await Country.findOrCreate({
            where: {
               id, name, image, continents, capital, subregion, area, population 
            }});
        
        const allCountries = await Country.findAll();
        return res.status(200).json(allCountries);
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
    
}

module.exports = allCountries;