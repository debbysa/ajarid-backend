const express = require("express");
const app = express();
const cors = require("cors");
require("./config/database");

app.use(express.json());

app.use(cors());

//middleware
app.use("/", function() {
  console.log("middleware dilewati");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("server running on port 3000");
});
