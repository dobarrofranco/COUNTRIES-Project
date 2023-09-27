const { Router } = require("express");
const router = Router();
const {allCountriesHandler, byIdCountriesHandler, nameHandler} = require('../handlers/countriesHandler')

router.get("/", allCountriesHandler);

router.get("/search", nameHandler);

router.get("/:id", byIdCountriesHandler);


module.exports = router;