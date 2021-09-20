const express = require('express');
const app = express();

const { User } = require('./models');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const port = 3000;

function start() {
    console.log("Express project listening at http://localhost:" + port);
}

app.listen(port, start);

// --------------------=============================--------------------

app.get('/users', (req, res) => {
    User.findAll().then((users) => {
        res.json(users);
    });
});

app.post('/users', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(user => {
        res.status(200).send('Success');
    })
});
