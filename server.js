// @/main.js
const express = require("express");
const app = express();
var index = require('./app/routes/web')
const dotenv = require("dotenv");
const mongoose = require('mongoose')
const cors = require('cors')

dotenv.config();

// Mongo DB conncetion
const database = process.env.MONGO_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('e don connect'))
.catch(err => console.log(err));


app.use(express.json());
app.use(express.urlencoded({extended: false}));
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

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
