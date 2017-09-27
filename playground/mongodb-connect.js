//const MongoClient = require('mongodb').MongoClient;
const{MongoClient, ObjectID} = require('mongodb'); //usando unstructured

// var obj = new ObjectID();  //genera un nuevo id
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');


  // db.collection('Users').insertOne({
  //   name: 'Dojelin',
  //   age: 30,
  //   location: 'Montreal'
  // }, (err,result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined,2));
  //
  //   //result.ops[0].name // valor del atributo name de la coleccion
  // });

  // //crear la base de datos
  // db.collection('Todos').insertOne({
  //   text: 'new task',
  //   completed: false
  // }, (err,result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined,2));
  // });

  db.close();
});
