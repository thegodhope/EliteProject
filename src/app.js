const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userController = require("./controllers/userController");
const app = express();
require("./database/connection");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Routes
app.post("/submit_message", userController.submitMessage);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
