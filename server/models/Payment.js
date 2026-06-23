const { Schema, model } = require("mongoose")

const PaymentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 1
    },
    type: {
        type: String,
        enum: ["payment", "advance"],
        default: "payment"
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    receivedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    note: {
        type: String,
        trim: true
    }
}, { timestamps: true }
);

const PaymentModel = model("payment", PaymentSchema)
module.exports = PaymentModel;