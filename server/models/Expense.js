const { Schema, model } = require("mongoose")

const ExpenseSchema = new Schema({
    purpose: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    date: {
        type: Date,
        required: true
    },
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
    approvedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: null
    }
}, { timestamps: true }
);

const ExpensModel = model("expense", ExpenseSchema);
module.exports = ExpensModel;