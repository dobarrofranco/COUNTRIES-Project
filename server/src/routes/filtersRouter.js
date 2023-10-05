const { Router } = require("express");
const {filterContinentHandler, orderByNameHandler, orderPopulationHandler} = require('../handlers/filtersHandler')
const router = Router();

router.get('/continent/:continent', filterContinentHandler);

router.get('/orderName/:order?', orderByNameHandler);
router.get('/orderPopulation/:order?', orderPopulationHandler);

module.exports = router;