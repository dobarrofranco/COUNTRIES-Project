const { Router } = require("express");
const {postActivitiesHandler, getActivityHandler, deleteAllActivitiesHandler, deleteActivityHandler} = require('../handlers/activitiesHandler');
const router = Router();

router.post("/", postActivitiesHandler);

router.get("/", getActivityHandler);

router.delete("/", deleteAllActivitiesHandler);

router.delete("/:name", deleteActivityHandler);

module.exports = router;