const { Router } = require("express");
const router = Router();
const allCountries = require('../controllers/allCountries')

router.get("/", allCountries);

// router.get("/:idPais", getDetailHandler);

// router.get("/countries/name", getNameHandler);


module.exports = router;