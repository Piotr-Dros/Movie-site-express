import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

dotenv.config();

export const PORT = process.env.PORT;
export const apiKey = process.env.ApiKey;
