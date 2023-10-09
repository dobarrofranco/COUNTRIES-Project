const { Router } = require("express");
const {filterContinentHandler, orderByNameHandler, orderPopulationHandler, activityTypeHandler, getContinentsHandler} = require('../handlers/filtersHandler')
const router = Router();

router.get('/continent', getContinentsHandler);

router.get('/continent/:continent', filterContinentHandler);

router.get('/orderName/:order?', orderByNameHandler);

router.get('/orderPopulation/:order?', orderPopulationHandler);

router.get('/activityName/:name?', activityTypeHandler);

module.exports = router;