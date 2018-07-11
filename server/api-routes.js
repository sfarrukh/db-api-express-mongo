import express from 'express';
const router = express.Router();
import { model } from './model';

router.use('/route', (req, res) => {
    res.send('Routes working \n')
});

router.get('/inventory', (req, res) => {
    model.find()
        .then((returned) => { res.json(returned); })
        .catch((err) => { console.log(err.message); })
});

router.post('/inventory', (req, res) => {
    let newItem = req.body;
    model.create(newItem)
        .then((created) => { res.json(created); console.log('Created') })
        .catch((err) => { console.log(err.message); })
});

export { router };