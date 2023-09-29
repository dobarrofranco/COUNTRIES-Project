const {postActivity, getActivity} = require('../controllers/activitiesController');

const postActivitiesHandler = async (req, res) => {
    
    const {name, difficulty, duration, season, countries} = req.body;
    
    try {
        console.log(req.body);
        const newActivities = await postActivity(name, difficulty, duration, season, countries);

        if (newActivities) {
            return res.status(200).json({newActivities});
        } else {
            return res.status(404).send('Activity not found');
        }

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getActivityHandler = async (req, res) => {    

    try {
        
        const activities = await getActivity();

        return res.status(200).json({activities});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {postActivitiesHandler, getActivityHandler};