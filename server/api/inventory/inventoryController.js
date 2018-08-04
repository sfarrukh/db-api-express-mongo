import { inventoryModel } from './inventoryModel';

export const inventoryController = {
    get: (req, res) => {
        inventoryModel.find()
            .then((returnedData) => { res.send(returnedData); })
            .catch((err) => { console.log(err.message ); })
    },
    post: (req, res) => {
        let newItem = req.body;
        inventoryModel.create(newItem)
            .then((created) => { res.json(created); })
            .catch((err) => { console.log(err.message); })
    }
}


