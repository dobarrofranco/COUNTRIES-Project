const {postActivity, getActivity, deleteAllActivities, deleteActivity} = require('../controllers/activitiesController');

const postActivitiesHandler = async (req, res) => {
    
    const {name, difficulty, duration, season, countries} = req.body;
    
    try {

        if (!req.body) {
            return res.status(404).json({ error: "not found" });  
        } 
        if (difficulty > 5 || difficulty <= 0) {
            return res.status(400).json({ error: "Invalid difficulty. It must be between 1 and 5" });
        } 

        const newActivities = await postActivity(name, difficulty, duration, season, countries);

        if (newActivities) {
            return res.status(200).json(newActivities);
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

        return res.status(200).json(activities);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const deleteAllActivitiesHandler = async (req, res) => {
    try {
        
        await deleteAllActivities();
        return res.status(200).json({message: 'All activities deleted'});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const deleteActivityHandler = async (req, res) => {
    
    const { id } = req.params;
    
    try {
        
        await deleteActivity(id);
        return res.status(200).json({message: 'Activity deleted'});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {postActivitiesHandler, getActivityHandler, deleteAllActivitiesHandler, deleteActivityHandler};