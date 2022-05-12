const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("data base connected succssfully");
    } catch (error) {
        console.log("data base connectinn failed", error);
    }
};
module.exports = connect;
