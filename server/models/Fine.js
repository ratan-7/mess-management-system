const { Schema, model } = require("mongoose")

const FineSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    reason: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        min: 1
    },
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true }
);

const FineModel = model("fine", FineSchema)
module.exports = FineModel;