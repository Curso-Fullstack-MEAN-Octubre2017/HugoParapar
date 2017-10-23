const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const status = {cancelado: -1, pendiente:0, enCurso:1, terminado:2}

const appointmentSchema = Schema({
	dateTimeI: {type: Date, required: true},
	dateTimeF: {type: Date, required: true},
	petId: {type: String, required: true},
	vetId: {type: String},
	status: {type: Number, default: 0},
	note: {type: String}
});

module.exports = mongoose.model("Appointments", appointmentSchema);