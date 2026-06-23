const { Schema, model } = require("mongoose")

const MealSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    lunch: {
        type: Boolean,
        default: true
    },
    dinner: {
        type: Boolean,
        default: true
    },
    mealType: {
        type: String,
        enum: ["veg", "non-veg"],
        default: "non-veg",
    }
}, { timestamps: true }
);

const MealModel = model("meal", MealSchema);
module.exports = MealModel