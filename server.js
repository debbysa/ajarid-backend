const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");

app.use(express.json());
app.use(cors());


// start server
server.listen(3000, function() {
  console.log("server running");
});

