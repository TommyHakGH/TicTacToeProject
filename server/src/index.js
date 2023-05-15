import express from "express";
import cors from "cors";
import { StreamChat } from "stream-chat"; 
import {v4 as uuidv4} from "uuid";
import bcrypt from "bcrypt";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const app = express();

app.use(cors());
app.use(express.json());
const api_key = process.env.APIKEY
const api_secret = process.env.APISECRET
const serverClient = StreamChat.getInstance(api_key, api_secret);
require('dotenv').config();

app.post("/signup", async (req, res) => {
    try{
    const {firstName, lastName, username, password} = req.body
    const userId = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = serverClient.createToken(userId);
    resizeTo.json({token, userId, firstName, lastName, username, hashedPassword});
    } catch(error) {
      res.json(error);  
    }
});

app.post("/login")
app.listen(3001, () => {
    console.log("Server is running on port 3001")
});

