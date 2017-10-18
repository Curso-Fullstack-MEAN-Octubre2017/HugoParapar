const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const status = {cancelado: -1, pendiente:0, enCurso:1, terminado:2}

const appointmentSchema = Schema({
	dateTime: {type: Date, required: true},
	petId: {type: String, required: true},
	vetId: {type: Schema.ObjectId, ref: "Vet"},
	status: {type: Number, default: 0} 
});

module.exports = mongoose.model("Appointments", appointmentSchema);