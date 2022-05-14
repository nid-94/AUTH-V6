const express = require("express");
const { signup, signin } = require("../controllers/user");
const { registerValidation, validation, loginValidation } = require("../middleware/validator");

// express router
const router = express.Router();

// authenfication for signup && sign in

router.post("/signup", registerValidation(), validation, signup);
router.post("/signin", loginValidation(), validation, signin);


module.exports = router;
