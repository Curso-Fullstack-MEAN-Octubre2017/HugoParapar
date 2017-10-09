// Dependencies
var Customer = require('../public/app/customer-module/customer-module.component.js');

// Opens App Routes
module.exports = function(express,app) {

// HOME
app.get('/', function(req, res, next) {
 res.sendFile('../public/index.html');
});

//API
var api = express.Router();
 //Clientes
 api.route('/customers') 
 .get(Customer.findAll)
 .post(Customer.add);
 api.route('/customers/:id') 
 .get(Customer.findById)
 .put(Customer.update)
 .delete(Customer.delete);
app.use('/api/', api);

};