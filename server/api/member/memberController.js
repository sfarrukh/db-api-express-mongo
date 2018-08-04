import { memberModel } from './memberModel';

export const memberController = {
    get: (req, res) => {
        memberModel.find()
            .then((returnedData) => { res.send(returnedData); })
            .catch((err) => { console.log(err.message ); })
    },
    post: (req, res) => {
        let newItem = req.body;
        memberModel.create(newItem)
            .then((created) => { res.json(created); })
            .catch((err) => { console.log(err.message); })
    }
}


