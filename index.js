const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

let skullyMessages = [];

let skullyFormatted = [];

app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views')));

app.get("/", (req, res) => {
  res.render('index', {
    messages: skullyFormatted
});

});

// Handle POST requests to /submit
app.post("/submit", (req, res) => {
  const data = req.body;
  console.log("Received data:", data);
  skullyFormatted.push({content: data.content, author: data.author });
  res.send("POST request received");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  
});
