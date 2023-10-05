const {filterContinent, orderByName, orderPopulation, activityType} = require('../controllers/filtersController');

const filterContinentHandler = async (req, res) => {
    
    const {continent} = req.params
    
    try {
        
        const continentResult = await filterContinent(continent);
        return res.status(200).json({continentResult}) 

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const orderByNameHandler = async (req, res) => {

    const {order} = req.params

    try {
        
        const orderResponse = await orderByName(order);
        return res.status(200).json({orderResponse});
    
    } catch (error) {
        res.status(500).json({error: error.message});
    }

}

const orderPopulationHandler = async (req, res) => {

    const {order} = req.params

    try {
        
        const orderResponse = await orderPopulation(order);
        return res.status(200).json({orderResponse});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const activityTypeHandler = async (req, res) => {
    
    const { name } = req.params;
    
    try {
        
        const typeResponse = await activityType(name);
        return res.status(200).json(typeResponse);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {filterContinentHandler, orderByNameHandler, orderPopulationHandler, activityTypeHandler};