var mongoose = require('mongoose');

//creacion estuctura Users
var User = mongoose.model('User', {
  name: {
    type: String,
    require: true,
    minlength: 2,
    trim: true
  },
  email: {
    type: String,
    require: true,
    minlength: 1,
    trim: true
  }
});

module.exports = {User};



// var newUser = new User({
//   name: 'Juancita Perez',
//   email: 'algo@algomas.com'
// });
//
//
// //Guardar la informacion usando Promise
// newUser.save().then((doc) => {
//   //console.log('Save todo', doc);
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save user',e);
// });
