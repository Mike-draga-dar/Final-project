const { Schema, model } = require('mongoose');

const drinkSchema = new Schema({
    name: String,
    // drink: String,
    instructions: String,
    image: { type: String, default: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png" },
    ingredients: Array,
    measurements: Array,
    // measure: Array,
    likes: { type: Number, default: 0 },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
},
    { timestamps: true }
)

module.exports = model('Drink', drinkSchema);