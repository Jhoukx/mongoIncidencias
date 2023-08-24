import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const server = express();

const config = JSON.parse(process.env.SERVER)

server.listen(config, () => {
    console.log(`Server listening on http//${config.host}:${config.port}`); 
});