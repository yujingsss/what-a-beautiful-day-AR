// const express = require('express');
// const app = express();
// const path = require('path');
// let port = process.env.PORT || 1000;

// app.set("/", "html");
// app.use(express.static(path.join(__dirname + "/public")));
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// app.get('/', (req, res) => {
//     res.render(__dirname + "/index.html");
// });

// app.listen(1000, () => {
//     console.log(`listening on localhost:${port}`);
// })

const express = require('express');
let app = express();
let server = require("http").createServer(app);
// build a own server to allow accessing the Socket.io library
//create script in html to access this library
let io = require("socket.io")(server);
let port = process.env.PORT || 1000;

server.listen(port, function () {
    console.log(`server listening on localhost:${port}`);
});

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
    console.log(`serving ${__dirname} /index.html`);
    res.sendFile(__dirname + "/index.html");
});
