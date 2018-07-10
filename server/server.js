import express from 'express';
import { middleware } from './middleware';
import { router } from './api-routes';

const app = express();

// middleware
middleware(app);

// routes
app.use('/api', router);


// export the app
export { app };