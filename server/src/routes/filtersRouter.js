const { Router } = require("express");
const {filterContinentHandler, orderByNameHandler, orderPopulationHandler, activityTypeHandler} = require('../handlers/filtersHandler')
const router = Router();

router.get('/continent/:continent', filterContinentHandler);

router.get('/orderName/:order?', orderByNameHandler);

router.get('/orderPopulation/:order?', orderPopulationHandler);

router.get('/activityName/:name?', activityTypeHandler);

module.exports = router;