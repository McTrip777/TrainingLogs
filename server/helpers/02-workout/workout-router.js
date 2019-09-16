router = require('express').Router();

const Workouts = require('./workout-model');

router.get('/', async (req, res) => {
    try{
        workouts = await Workouts.find();
        res.status(200).json(workouts);
    } catch(error){
        res.status(500).json(error);
    }
})

router.get('/:id', async (req, res) => {
    try{
        workout = await Workouts.findById(req.params.id)
        if(workout){
            res.status(200).json(workout)
        } else {
            res.status(404).send('workout not found')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    try{
        workout = await Workouts.add(req.body)
        res.status(200).json(workout)
    } catch(error){
        res.status(500).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        count = await Workouts.destroy(req.params.id)
        if(count > 0){
            res.status(200).json('The workout has been removed')
        } else {
            res.status(401).json('The workout could not be found')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

router.put('/:id', async (req, res) => {
    try{
    let workout = await Workouts.update(req.params.id, req.body)
    if(workout){
        res.status(200).json(workout)
    } else {
        res.status(404).json('could not update')
    }
    }catch(error){
        res.status(500).json(error);
    }
})

module.exports = router;
