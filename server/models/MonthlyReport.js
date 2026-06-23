const { Schema, model } = require("mongoose")

const MonthlyReportSchema = new Schema({
    month: {
        type: String,
        required: true,
    },
    totalExpense: {
        type: Number,
        default: 0
    },
    totalUsers: {
        type: Number,
        default: 0
    },
    mealCharge: {
        type: Number,
        default: 0
    },
    finalized: {
        type: Boolean,
        default: false
    },
    finalizedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    finalizedAt: {
        type: Date,
        default: null
    }
}, { timestamps: true }
);

const MonthlyReportModel = model("monthly", MonthlyReportSchema)
module.exports = MonthlyReportModel;