import express from 'express';
import { middleware } from './middleware';
import { router } from './api-routes';
import mongoose from 'mongoose';
const url = 'mongodb://localhost:27017/enterprise';

const app = express();

// middleware
middleware(app);

// connect to MongoDB with 'mongoose' driver
mongoose.connect(url, {useNewUrlParser:true})
    .then((success) => { console.log('Connected to DB')})
    .catch((err) => { console.log('Failed to connect to DB: '+ err.message)});

// routes
app.use('/api', router);

// export the app
export { app };