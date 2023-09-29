const { Router } = require("express");
const {postActivitiesHandler, getActivityHandler, deleteAllActivitiesHandler} = require('../handlers/activitiesHandler');
const router = Router();

router.post("/", postActivitiesHandler);

router.get("/", getActivityHandler);

router.delete("/", deleteAllActivitiesHandler);

module.exports = router;