const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors')
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
