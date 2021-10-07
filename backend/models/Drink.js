const { Schema, model } = require('mongoose');

const drinkSchema = new Schema({
    name: String,
    // drink: String,
    instructions: String,
    image: { type: String },
    ingredients: Array,
    measurements: Array,
    // measure: Array,
    likes: { type: Array },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
},
    { timestamps: true }
)

module.exports = model('Drink', drinkSchema);