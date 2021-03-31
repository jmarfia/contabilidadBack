const { User } = require("../data/models");
const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");

module.exports = {

  new(req, res) {
    let user = new User({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10),
    });

    User.findOne({ username: user.username }).then((result) => {
      if (result !== null) {
        return res.send("Error");
      }
      user.save();
      res.send("Listo!");
    });
  },

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
