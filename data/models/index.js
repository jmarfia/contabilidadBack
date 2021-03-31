const mongoose = require("mongoose");

const Movement = require("./movement")


const url = "mongodb+srv://useradmin:useradmin1@clustercontable.loqyg.mongodb.net/test";

console.log("connecting to", url);

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

  const models = { Movement };

  module.exports = models;
