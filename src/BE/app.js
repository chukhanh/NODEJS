const express = require('express');
const morgan = require('morgan');
const {default: helmet} = require("helmet");
const compression = require("compression");
const app = express();

//init middleware
// Example: res: GET / 200 1.585 ms - 22
app.use(morgan("dev"));

// Example: res: ::ffff:127.0.0.1 - - [30/Nov/2023:08:27:38 +0000] "GET / HTTP/1.1" 200 22 "-" "curl/8.1.2"
// Should use: pro env
// app.use(morgan("combined"));

// Example: res: ::ffff:127.0.0.1 - - [30/Nov/2023:08:28:47 +0000] "GET / HTTP/1.1" 200 22
// app.use(morgan("common"));

// Example: res: ::ffff:127.0.0.1 - GET / HTTP/1.1 200 22 - 1.585 ms
// app.use(morgan("short"));

// Example: res: GET / 200 22 - 1.655 ms
// app.use(morgan("tiny"));

app.use(helmet());
app.use(compression());
//init db
require('./dbs/inti.db');

// init routes
app.get('/', (req, res, next) => {
    const text = 'First Day Learn NodeJs ';
    return res.status(200).json({
        message: 'Welcome ',
        metadata : text.repeat(10000)
    });
})

// Handler error

module.exports = app;