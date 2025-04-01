const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// todo
app.post('/', (req, res) => {
    res.send(`Received POST request for ${req.body}`);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))