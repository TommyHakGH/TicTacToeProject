import express from "express";
import cors from "cors";
import { StreamChat } from "stream-chat"; 
require('dotenv').config( {path: '/custom/path/.env'} );


const app = express();

app.use(cors());
app.use(express.json());
const api_key = process.env.APIKEY
const api_secret = process.env.APISECRET

const serverClient = new StreamChat.getInstance(api_key, api_secret);
app.listen(3001, () => {
    console.log("Server is running on port 3001")
});

