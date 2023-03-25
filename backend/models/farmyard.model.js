const mongoose = require('mongoose');

const farmyardSchema = mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true 
        },
        location: { 
            type: String 
        },
        chickens: [{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'chicken' 
        }]
    }
);

module.exports = mongoose.model('Farmyard', farmyardSchema);