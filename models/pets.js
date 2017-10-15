const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petsSchema = Schema({
	chipNumber: String,
	name: String,
	birthDate: Date,
	species: String,
	race: String,
	description: String,
	photoURL: String,
	customerId: String
});

module.exports = mongoose.model("Pets", petsSchema);