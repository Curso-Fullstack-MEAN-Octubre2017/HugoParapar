if (typeof validate !== "function") validate = require("validate.js");

const Validators = {
	validateCustomer : function(customer) {
		return validate(customer, {
			firstName : {
				presence : true,
				length : {
					minimum : 4,
					maximum: 10,
					message : "Nombre entre 4-10 caracteres"
				}
			}
		});
	}
}

if (typeof module !== "undefined" && module.exports) module.exports = Validators;