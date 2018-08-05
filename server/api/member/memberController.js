import { memberModel } from './memberModel';

export const memberController = {
    get: (req, res) => {
        memberModel.find()
            .then((returnedData) => { res.send(returnedData); })
            .catch((err) => { console.log(err.message ); })
    },
    post: (req, res) => {
        let newItem = new memberModel(req.body);
        newItem.save()
            .then((created) => { 
                res.json(created); 
                console.log('New member created')})
            .catch((err) => {
                console.log(err.message); })
    }
}


