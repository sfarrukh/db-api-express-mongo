import express from 'express';
const router = express.Router()

router.use('/route', (req, res) => {
    res.send('Routes working \n')
});

export { router };