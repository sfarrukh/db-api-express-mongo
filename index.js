"use strict";
import { app } from './server/server';

app.listen(8000, (err) => {
    if (err) {
        console.log(err.message);
    }else{
        console.log('On port 8000')
    };
});