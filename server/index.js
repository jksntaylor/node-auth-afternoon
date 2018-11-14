require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const app = express();
const {CONNECTION_STRING, SERVER_PORT: PORT, SESSION_SECRET} = process.env;
const port = PORT || 4000;

app.use(bodyParser.json());

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

massive(CONNECTION_STRING).then(() => {
    console.log('tacomarked')
});

app.listen(port, () => {
    console.log('that crib is going to be a warzone', port);
});