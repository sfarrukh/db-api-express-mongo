import express from 'express';
import { middleware } from './middleware/middleware';
import { router } from './api/routes';
import { authRoutes } from './authentication/authRoutes';
import mongoose from 'mongoose';
const url = 'mongodb://localhost:27017/enterprise';

const app = express();

// middleware
middleware(app);
app.use(express.json());
app.use(express.urlencoded({"extended":true}));

// connect to MongoDB with 'mongoose' driver
mongoose.connect(url, {useNewUrlParser:true})
    .then((success) => { console.log('Connected to DB')})
    .catch((err) => { console.log('Failed to connect to DB: '+ err.message)});

// routes
app.use('/api', router);
app.use('/sign', authRoutes);

// Error handling
app.use((err, req, res) => {
    if (err) console.log(err.message)
})

// export the app
export { app };