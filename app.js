const express = require('express');
const connectDB = require('./config/database.js');
const routesClient = require('./routes/clientRoutes.js');
const routesBooks = require('./routes/booksRoutes.js')
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', routesClient,routesBooks);


app.listen(port, () => console.log(`Server listening in port http://localhost:${port}`));