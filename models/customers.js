const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = Schema({
	dni: String,
	firstName: String,
	lastName: String,
	phoneNumber: String,
	email: String,
	note: String
});

module.exports = mongoose.model("Customer", customerSchema);


