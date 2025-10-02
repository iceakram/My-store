import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { env } from './config/env.js';
import { applySchema } from './config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

if (process.argv.includes('--init-db')) { applySchema(); console.log('DB initialized'); process.exit(0); }

app.use(helmet());
app.use(cors({ origin: env.clientUrl, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req,res)=>res.send('Digital Store running'));

app.listen(env.port, () => console.log(`Server on ${env.baseUrl}`));