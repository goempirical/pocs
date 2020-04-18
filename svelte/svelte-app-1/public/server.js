const express = require("express");
const { join } = require("path");
const app = express();

// Serve static assets from the /public folder
app.use(express.static(join(__dirname, "public")));

// Endpoint to serve the configuration file
app.get("/auth_config.json", (req, res) => {
  res.sendFile(join(__dirname, "auth_config.json"));
});

app.get("/build/bundle.js", (req, res) => {
    res.sendFile(join(__dirname, "/build/bundle.js"));
  });

app.get("/build/bundle.css", (req, res) => {
    res.sendFile(join(__dirname, "/build/bundle.css"));
});

app.get("/global.css", (req, res) => {
    res.sendFile(join(__dirname, "/global.css"));
});

// Serve the index page for all other requests
app.get("/*", (_, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

// Listen on port 3000
app.listen(3000, () => console.log("Application running on port 3000"));