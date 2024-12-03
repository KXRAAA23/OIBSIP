const mongoose = require("mongoose");

module.exports = () => {
    try {
        mongoose.connect(process.env.DB)
            .then(() => {
                console.log("Connected to Database successfully!");
            })
            .catch((error) => {
                console.error("Could not connect to Database!", error);
            });
    } catch (error) {
        console.error("Unexpected error while connecting to Database!", error);
    }
};
