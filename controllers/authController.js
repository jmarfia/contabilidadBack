const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../data/models");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
    async login(req, res) {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const hasValidPassword =
            user === null ? false : await bcrypt.compare(password, user.password);

        if (!(user && hasValidPassword)) {
            return res
                .status(401)
                .json({ auth: false, message: "wrong username or password" });
        }

        const token = jwt.sign(user.username, JWT_SECRET);

        res.json({ auth: true, token, username: user.username });
    },

    register(req, res) {
        let user = new User({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 10),
        });

        User.findOne({ username: user.username }).then((result) => {
            if (result !== null) {
                return res.send("Username already in use ");
            }
            user.save();
            const token = jwt.sign(user.username, JWT_SECRET);
            res.json({ token, username: user.username });
        });
    },

}