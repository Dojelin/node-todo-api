var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

//  esta instruccion es igual a la anterior, pero como la propiedad y la variable tienen el mismo nombre se puede simplificar
// module.exports = {
//   mongoose: mongoose
// };
