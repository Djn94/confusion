const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EarringSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    // id: { type: String, required: true, unique: true }
});

const Earring = mongoose.model("Earring", EarringSchema);

module.exports = Earring;
