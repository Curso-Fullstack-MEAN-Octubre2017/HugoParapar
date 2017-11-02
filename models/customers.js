const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const customerSchema = Schema({
	dni:{type: String},
	firstName: {type: String},
	lastName:{type: String},
	phoneNumber: {type: String},
	email: {type: String},
	note: {type: String}
});

module.exports = mongoose.model("Customer", customerSchema);