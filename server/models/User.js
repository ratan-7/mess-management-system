const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["student", "manager", "admin"],
        default: "student"
    },
    status: {
        type: String,
        enum: ["pending", "approved", "admin"],
        default: "pending"
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true }
)

const UserModel = model("user", UserSchema);
module.exports = UserModel