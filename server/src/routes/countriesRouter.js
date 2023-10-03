const { Router } = require("express");
const router = Router();
const {allCountriesHandler, byIdCountriesHandler} = require('../handlers/countriesHandler')

router.get("/", allCountriesHandler);

router.get("/:id", byIdCountriesHandler);


module.exports = router;