const express = require('express');
const app = express();
const path = require('path');
let port = process.env.PORT || 1000;

app.set("/", "html");
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render(__dirname + "/index.html");
});

app.listen(1000, () => {
    console.log(`listening on localhost:${port}`);
})