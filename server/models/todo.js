var mongoose = require('mongoose');

//creacion de estructura Todo
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    require: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};

// //crear una nueva istancia de la estructura
// var newTodo = new Todo({
//   text: 'Water the plants',
//   completed: true,
//   completedAt: 123
// });

// var newTodo = new Todo({
//   text: '    Read emails'
// });


// //Guardar la informacion usando Promise
// newTodo.save().then((doc) => {
//   //console.log('Save todo', doc);
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save todo',e);
// });
