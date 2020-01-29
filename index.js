const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");
require("./config/database");

app.use(express.json());

app.use(cors());

app.use("/posts", require("./routes/postsRouter"));
app.use("/users", require("./routes/usersRouter"));

//middleware
// app.use("/", function() {
//   console.log("middleware dilewati");
// });

server.listen(process.env.PORT || 3000, function() {
  console.log("server running on port 3000");
});
