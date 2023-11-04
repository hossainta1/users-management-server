const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

const user = [
    { id: 1, name: 'John', email: 'jhon@gmail.com' },
    { id: 2, name: 'Arif', email: 'arif@gmail.com' },
    { id: 3, name: 'Sharif', email: 'sharif@gmail.com' },
]


app.get('/', (req, res) => {
    res.send("Users management server is Running");
})


app.use(cors());

app.get('/users', (req, res) => {
    res.send(user)
})

app.post('/users', (req, res) => {
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});