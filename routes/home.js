import express from 'express';
import fetch from 'node-fetch';
import { apiKey } from '../config.js';

const apiBaseUrl = 'http://api.themoviedb.org/3';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

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

async function getCurrentPlayedMovies() {
    const response = await fetch(nowPlayingUrl, { method: 'GET' }).catch(
        (error) => {
            console.log(error);
        }
    );
    const data = await response.json();
    return data;
}

export default router;
