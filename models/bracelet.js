const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BraceleteSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    // id: { type: String, required: true, unique: true }
});

const Bracelete = mongoose.model("Bracelete", BraceleteSchema);

module.exports = Bracelete;
