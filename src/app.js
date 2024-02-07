const express = require("express");
const bodyParser = require("body-parser");
const userController = require("./controllers/userController");
const app = express();
require("./database/connection");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.post("/submit_message", userController.submitMessage);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
