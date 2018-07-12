import mongoose from 'mongoose';
// mongoose.connect('mongodb://localhost/dbTest');
mongoose.connect('mongodb://localhost:27017/dbTest', {useNewUrlParser:true});
import { model } from './model';

model.create({ productName: 'Samsung'})
    .then((created) => { console.log('Created')})
    .catch((err) => { err.message });