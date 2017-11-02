const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petsSchema = Schema({
	chipNumber: {type: String},
	name: {type: String},
	birthDate: {type: Date},
	species: {type: String},
	race: {type: String},
	description: {type: String},
	photoURL: {type: String, default: '0.png'},
	customerId: {type: String, required: true}
});

module.exports = mongoose.model("Pets", petsSchema);