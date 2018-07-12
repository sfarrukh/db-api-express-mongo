import { model } from './model';

export const controller = {
    get: (req, res) => {
        model.find()
            .then((returnedData) => { res.send(returnedData); })
            .catch((err) => { console.log(err.message ); })
    },
    post: (req, res) => {
        let newItem = req.body;
        model.create(newItem)
            .then((created) => { res.json(created); })
            .catch((err) => { console.log(err.message); })
    }
}


