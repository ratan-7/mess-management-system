const User = require("../models/User")

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length == 0) {
            return res.status(200).json({
                message: "User not found"
            })
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

