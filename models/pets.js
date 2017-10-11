const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petsSchema = Schema({
	chipNumber: String,
	name: String,
	birthDate: String,
	species: String,
	race: String,
	description: String,
	photoURl: String,
	customerId: String
});

module.exports = mongoose.model("Pets", petsSchema);
