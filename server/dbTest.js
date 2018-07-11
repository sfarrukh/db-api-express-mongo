import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/dbTest');

import { model } from './model';
model.create({ productName: 'Samsung'}).then((created) => { console.log('Created')})