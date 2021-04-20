const { User } = require("../data/models");
const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");

module.exports = {


  user(req, res) {
    console.log(req.body.username)

    User.find({username:req.body.username})
      .limit(20)
      .sort("desc -createdAt")
      .exec()
      .then((user) => {
        res.json(user);
      });
  },
};
