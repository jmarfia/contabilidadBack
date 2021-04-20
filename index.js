require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");

const bcrypt = require("bcrypt");
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));

const port = process.env.PORT;

require("./routes/api")(app);


app.listen(port, () =>
  console.log("Servidor escuchando en puerto: " + port)
);

