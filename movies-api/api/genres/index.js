import express from 'express';
import { genres } from './moviesGenres';

const genresRouter = express.Router(); 

genresRouter.get('/', (req, res) => {

    res.json(genres);

});

export default genresRouter;