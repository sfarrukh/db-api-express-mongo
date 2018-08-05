import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { memberModel } from '../api/member/memberModel';

export const auth = {
    verifyMember: (req, res, next) => {
        let username = req.body.username;
        let password = req.body.password;

        if (!username || !password){
            return res.status(400).end('Please provide username & password');
        }
        
        memberModel.findOne({username: username})
            .then((member) => {
                if (!member){
                    res.send('No member found with this username')
                }else{
                    bcrypt.compare(password, member.password)
                        .then((matched) => { 
                            if (!matched) { 
                                res.status(401).send('Wrong password') 
                            }else{
                                next(); 
                            };
                        })
                        .catch((err) => { next(err);  })
                } 
            })
            .catch((err) => { next(err); })
    },

    signToken: (req, res, next) => {
        let signToken = jwt.sign({foo: 'bar'}, 'shhh')
        res.json(signToken);
    }
}