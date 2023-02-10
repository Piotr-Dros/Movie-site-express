import fetch from 'node-fetch';
import { apiKey } from '../config.js';

const apiBaseUrl = 'http://api.themoviedb.org/3';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;

export async function getFilmById(id) {
    const currentMovieUrl = `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
    const response = await fetch(currentMovieUrl, { method: 'GET' }).catch(
        (error) => {
            console.log(error);
        }
    );
    const data = await response.json();
    return data;
}

export async function getCurrentPlayedMovies() {
    const response = await fetch(nowPlayingUrl, { method: 'GET' }).catch(
        (error) => {
            console.log(error);
        }
    );
    const data = await response.json();
    return data;
}
