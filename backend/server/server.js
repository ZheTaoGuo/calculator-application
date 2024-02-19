
const express = require('express');
const app = express();
const PORT = 8080; 
const bodyParser = require('body-parser');
const cors = require('cors')

const { addition } = require('./controllers/addition');
const { subtract } = require('./controllers/subtract');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/add', addition)
app.post('/subtract', subtract)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

