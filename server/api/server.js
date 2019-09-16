const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
// const { authenticate } = require('../helpers/00-auth/auth-model');

const server = express();

// const authRouter = require('../helpers/00-auth/auth-router')
const userRouter = require('../helpers/01-user/user-router');
const workoutRouter = require('../helpers/02-workout/workout-router');

server.use(express.json());
server.use(helmet());
server.use(cors());

// server.use('/auth', authRouter);
server.use('/user', userRouter);
server.use('/workout', workoutRouter);

server.get('/', (req, res) => {
    res.send("I'm on it boss!")
});

module.exports = server;