import express from 'express';
import fetch from 'node-fetch';
import { apiKey } from '../config.js';
import {
    getCurrentPlayedMovies,
    getFilmById,
} from '../models/fetch-data.models.js';

const imageBaseUrl = 'http://image.tmdb.org/t/p';

const router = express.Router();

router.use((req, res, next) => {
    res.locals.imageBaseUrl = imageBaseUrl;
    next();
});

router.get('/', (req, res) => {
    getCurrentPlayedMovies().then((data) => {
        res.render('home', {
            data: data.results,
        });
    });
});

router.get('/movie/:id', (req, res) => {
    const movieId = req.params.id;
    getFilmById(movieId).then((movieData) => {
        res.render('movie', {
            movie: movieData,
        });
    });
});

router.post('/movie/:id/rating', (req, res) => {});

export default router;
