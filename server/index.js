
// TODO : RUN THE SERVER HERE

const express = require('express')
const crossoverRoutes = require('./routes/crossoverRoutes');
const app = express();
const PORT = 5000;
const CORS = require("cors")
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// Middleware to parse incoming JSON data
app.use(express.json());
app.use(CORS())










// Routes
app.use('/api', crossoverRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
