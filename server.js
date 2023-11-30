const app = require("./src/BE/app");
const dotenv =  require("dotenv").config();
const  port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`Start app with port ${port} !!!!`)
});

process.on('SIGINT', () => {
    server.close(() => {
        console.log(`Exit app with port ${port} !!!!`)
    })
});
