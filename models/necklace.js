const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NecklaceSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    // id: { type: String, required: true, unique: true }
});

const Necklace = mongoose.model("Necklace", NecklaceSchema);

module.exports = Necklace;
