const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 1337;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);

app.use(express.json());
app.use(cors());

// testing/remove these later
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/', (req, res) => {
    res.send(`Received POST request for ${req.body}`);
});

// end points

// GET all user accounts
app.get('/user_account', (req, res) => {
    knex('user_account')
        .select('*')
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json('The user data you are looking for could not be found.'));
});

// GET a specific user account based on the user's id
app.get(`/user_account/:id`, (req, res) => {
    knex('user_account')
        .where('id', req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json('The specific user data you are looking for could not be found.'));
});


// POST a user account (create a new account)
app.post(`/user_account`, (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const username = req.body.username;
    const plaintext_password = req.body.password;

    // TODO: SALT AND HASH THE PASSWORD


    knex('user_account')
        .insert({ first_name: first_name, last_name: last_name, username: username, password: plaintext_password })
        .then(data => res.status(201).json('User account successfully created.'))
        .catch(err => res.status(500).json(err + 'User account could not be created.'));
});

// DELETE a user account
app.delete(`/user_account/:id`, (req, res) => {
    knex('user_account')
        .where('id', req.params.id)
        .del()
        .then(data => res.status(204).json('Deleted employee.'))
        .catch(err => res.status(500).json('Failed to delete employee.'));
});


// GET all items
app.get('/item', (req, res) => {
    knex('item')
        .select('*')
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json('The item data you are looking for could not be found.'));
});

// GET a specific item based on the item's id
app.get('/item/:id', (req, res) => {
    knex('item')
        .where('id', req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json('The item data you are looking for could not be found.'));
});

// POST a new item
app.post(`/item`, (req, res) => {
    const user_id = req.body.user_id;
    const item_name = req.body.item_name;
    const description = req.body.description;
    const quantity = req.body.quantity;

    knex('item')
        .insert({ user_id: user_id, item_name: item_name, description: description, quantity: quantity })
        .then(data => res.status(201).json('Item successfully created.'))
        .catch(err => res.status(500).json(err + 'Item could not be created.'));
});



// PATCH/PUT a specific item


// DELETE an item




// logging in workflow
// 1. we receive a username/ plaintext password in the response
// 2. we hash the incoming password and compare to the hash to the stored hash
// 3. If the hashed password = the stored hash password,
//    return a successful login in the resposne. (authenticaed)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))