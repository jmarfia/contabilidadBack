const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(express.static(__dirname + "/public"));

const port = 3000;

require("./routes/api")(app);


app.listen(port, () =>
  console.log("Servidor escuchando en puerto: " + port)
);