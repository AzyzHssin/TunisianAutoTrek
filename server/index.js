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
const crossoverRoutes = require("./routes/crossoverRoutes");
const ecoRoutes = require("./routes/ecoRoutes");
const luxuryRoutes = require("./routes/luxuryRoutes");
const mixedRoutes = require("./routes/mixedRoutes");
app.use("/api", mixedRoutes);
app.use("/api", crossoverRoutes);
app.use("/api", ecoRoutes);
app.use("/api", luxuryRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
