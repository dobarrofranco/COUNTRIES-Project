const { Router } = require("express");
const {postActivitiesHandler, getActivityHandler} = require('../handlers/activitiesHandler');
const router = Router();

router.post("/", postActivitiesHandler);

router.get("/", getActivityHandler);

module.exports = router;