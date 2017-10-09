const mongoose = require('mongoose');

//mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const clientSchema = new Schema({
	chipNumber: { type: String, required: true },
	name: { type: String, required: true },
	birthDate: { type: String, required: true },
	species: { type: String, required: true },
	race: { type: String, required: true },
	description: { type: String},
	photoURl: { type: String},
	photoURl: { type: String}
});