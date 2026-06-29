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

exports.approveUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(200).json({
                message: "User not found"
            })
        }
        user.status = "approved";
        await user.save();
        res.status(200).json({
            message: "user approved by admin"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.changeRole = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(200).json({
                message: "user not found"
            })
        }
        user.role = "manager";
        await user.save();
        res.status(200).json({
            message: "user role changed by admin"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}