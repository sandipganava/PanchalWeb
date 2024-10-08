require("dotenv").config();
const mongoose = require("mongoose");


const PlanSchema = mongoose.Schema({
    razorpay_plan_id: {
        type: String,
    },
    entity: {
        type: String,
    },
    interval: {
        type: Number,
    },
    period: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly','one_time']
    },
    item: {
        name: {
            type: String,
        },
        amount: {
            type: String,
        },
        currency: {
            type: String,
        },
        description: {
            type: String,
        }
    },
    is_recurring: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: String,
        default: null,
    },
    updated_at: {
        type: String,
        default: null,
    },
    deleted_at: {
        type: String,
        default: null,
    },
});

const Plan = mongoose.model("plan", PlanSchema);
module.exports = Plan;
