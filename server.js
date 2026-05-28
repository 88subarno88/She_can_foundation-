// backend for She Can Foundation contact form
// Uses Express to serve the website and handle form submissions

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Let the server read JSON data from requests and serve the public folder
app.use(express.json());
app.use(express.static("public"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});