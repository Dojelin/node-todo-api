const{MongoClient, ObjectID} = require('mongodb'); //usando unstructured

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // //deleteMany
  // db.collection('Todos').deleteMany({text: 'to do the luggage'}).then((result) => {
  //   console.log(result); //result es un objeto con toda la informacion de los documentos borrados
  // });

  // //deleteOne - borra el primer registro que cumple con el criterio
  // db.collection('Todos').deleteOne({text: 'to do the luggage'}).then((result) => {
  //   console.log(result); //result es un objeto con toda la informacion de los documentos borrados
  // });

  // //findOneAndDelete - esta funcion retorna un documento
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result); //result es el documento borrado
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("59cbca19953d0352afa116dd")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  //db.close();
});
