const {getAllCountries, getCountriesById, getNameCountries} = require('../controllers/countriesController')

const allCountriesHandler = async (req, res) => {

    try {
        
        const countries = await getAllCountries();

        return res.status(200).json({ countries: countries })

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const byIdCountriesHandler = async (req, res) => {

    const { id } = req.params;

    try {
        
        const countries = await getCountriesById(id)

        if (countries) {
            return res.status(200).json({countries: countries});
        } else {
            return res.status(404).json({countries: "no hay nada"});
        }

    } catch (error) {
        res.status(500).json({error: error.message});
    }

}

const nameHandler = async (req, res) => {

    console.log(req.query);

    const { name } = req.query;

    try {
        
        const countries = await getNameCountries(name);

        if (countries) {
            return res.status(200).json({countries})
        } else {
            return res.status(404).json({countries: 'Countries not found'});
        }

    } catch (error) {
        res.status(500).json({error: error.message});
    }

}


module.exports = {allCountriesHandler, byIdCountriesHandler, nameHandler};