const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Admin password 
const ADMIN_PASSWORD = "shecan123";

// File where we save all the messages 
const DATA_FILE = path.join(__dirname, "data", "messages.json");

// Let the server read JSON data from requests and serve the public folder
app.use(express.json());
app.use(express.static("public"));

// Make sure the data file exists before we use it
if (!fs.existsSync(DATA_FILE)) {
  fs.mkdirSync(path.join(__dirname, "data"), { recursive: true });
  fs.writeFileSync(DATA_FILE, "[]");
}

// Read all saved messages from the file
function getMessages() {
  return JSON.parse(fs.readFileSync(DATA_FILE));
}

// Save the messages list back to the file
function saveMessages(messages) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2));
}

// API: receive a new form submission
app.post("/api/submit", (req, res) => {
  const { name, email, message } = req.body;

  // Server-side validation 
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (!email.includes("@")) {
    return res.status(400).json({ error: "Please enter a valid email" });
  }

  // Build the new entry and save it
  const messages = getMessages();
  messages.push({
    name: name,
    email: email,
    message: message,
    date: new Date().toLocaleString(),
  });
  saveMessages(messages);

  res.json({ success: true });
});

// give admin the list of messages only if password is correct
app.post("/api/messages", (req, res) => {
  if (req.body.password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Wrong password" });
  }
  res.json(getMessages());
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
