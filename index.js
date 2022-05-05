import express from 'express';
import cors from 'cors';
import {addStore} from './src/stores.js';


const app = express();
app.use (cors());
app.use (express.json())

// set the routes
app.post('/stores', addStore)






app.listen (3000,() => {
    console.log ('Listening');
});