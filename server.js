const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(routes);

mongoose.connect(process.env.MONGODB_URI);

app.listen(PORT, () => console.log(`App listening on localhost:${PORT}`));