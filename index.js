const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;


// Midleware

app.use(cors());
app.use(express.json());


const user = [
    { id: 1, name: 'John', email: 'jhon@gmail.com' },
    { id: 2, name: 'Arif', email: 'arif@gmail.com' },
    { id: 3, name: 'Sharif', email: 'sharif@gmail.com' },
]


app.get('/', (req, res) => {
    res.send("Users management server is Running");
})


app.get('/users', (req, res) => {
    res.send(user)
})

app.post('/users', (req, res) => {
    console.log(req.body);
    const newUser = req.body;
    newUser.id = user.length + 1;
    user.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});