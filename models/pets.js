const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petsSchema = Schema({
	chipNumber: {type: String, required: true},
	name: {type: String, required: true},
	birthDate: {type: Date, required: true},
	species: {type: String, required: true},
	race: {type: String, required: true},
	description: {type: String, required: true},
	photoURL: {type: String, required: true},
	customerId: {type: String, required: true}
});

module.exports = mongoose.model("Pets", petsSchema);