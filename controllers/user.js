const User = require("../model/User");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const SECRETKEY = "123";

exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(400).send({ errors: [{ msg: "email should be unique" }] });
        }
        // hashage de mot de passe
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({ ...req.body });
        newUser.password = hashedPassword;
        await newUser.save();
        // creation of token
        const token = jsonwebtoken.sign({ id: newUser._id }, process.env.SECRET_KEY);
        return res.status(200).send({ msg: "rany d5lt lel base de donne", user: newUser, token });
    } catch (error) {
        return res.status(400).send({ msg: "rany madd5ltch lel base de donne" });
    }
};

exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundUser = await User.findOne({ email });
        if (!foundUser) {
            return res.status(400).send({ errors: [{ msg: "bad credentiel" }] });
        }
        const foundPassword = await bcrypt.compare(password, foundUser.password);
        if (!foundPassword) {
            return res.status(400).send({ errors: [{ msg: "bad credentiel" }] });
        }
        // creation of token
        const token = jsonwebtoken.sign({ id: foundUser._id }, process.env.SECRET_KEY);
        return res.status(200).send({ msg: "login  success", user: foundUser, token });
    } catch (error) {
        return res.status(400).send({ msg: "login failed" });
    }
};
