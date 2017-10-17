const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = Schema({
	dateTime: Date,
	petId: String,
	vetId: String,
	status: {type: Number, enum:[-1,0,1,-1]} //-1 Cancelado 0 Pendiente 1 En curso 2 Terminada
});

module.exports = mongoose.model("Appointments", appointmentSchema);