// TODO : RUN THE SERVER HERE

const express = require("express");
const app = express();
const PORT = 5000;
const CORS = require("cors");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());
app.use(express.json());
app.use(CORS());

// Routes
const carRoutes = require("./routes/carRoutes");
app.use("/api", carRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
