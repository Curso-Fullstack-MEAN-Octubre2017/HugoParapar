const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const customerSchema = new Schema({
	dni: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	email: { type: String},
	note: { type: String}
});

module.exports = mongoose.model("Customer", customerSchema);


