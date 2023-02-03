// @/main.js
const express = require("express");
var index = require('./app/routes/web')

const app = express();
app.use(express.json());

app.use("/", index);

const server = async () => {
  try {
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

server()
