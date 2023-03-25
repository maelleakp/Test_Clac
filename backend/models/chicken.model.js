const mongoose = require("mongoose");

const chickenSchema = mongoose.Schema(
    {
        name: {
            type: String,
            requiered: true,
        },
        birthday: {
            type: Date,
        },
        weight: {
            type: Number,
            requiered: true,
        },
        steps: {
            type: Number,
            default: 0,
        },
        isRunning: {
            type: Boolean,
            default: false,
        }
    }
);

module.exports = mongoose.model('chicken', chickenSchema)
