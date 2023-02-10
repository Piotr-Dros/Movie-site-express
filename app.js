import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { __dirname } from './config.js';

import homeRouter from './routes/home.js';

export const app = express();

app.use(
    helmet({
        contentSecurityPolicy: false,
        crossOriginEmbedderPolicy: false,
    })
);
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', homeRouter);
