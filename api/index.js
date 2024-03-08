import express from 'express';
import mongoose from 'mongoose';
import config from './db/config.js'
import User from './db/model/Users.js';
const app = express();

console.log("api is working!!");

app.listen(4500);