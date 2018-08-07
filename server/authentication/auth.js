import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { memberModel } from '../api/member/memberModel';

export const auth = {
    verifyMember: (req, res, next) => {
        let username = req.body.username;
        let password = req.body.password;

        if (!username || !password){
            return res.status(400).end('Please provide username & password');
        };
        
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

    signToken: (req, res) => {
        let signedToken = jwt.sign({key: 'value'}, 'secret', { expiresIn: '1h' })
        res.json(signedToken);
    },

    decodeToken: (req, res, next) => {
        let token = req.headers.authorization
        jwt.verify(token, 'secret', (err, decoded) => {
            if (err) err.message;
            if (!decoded){
                res.status(401).send('Unauthorized')
            }else if(decoded.key === 'value'){
                return next();
            }else{
                res.status(401).send('Something went wrong');
            }
        })
    }
}