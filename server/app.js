const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "..", "dist")));

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
