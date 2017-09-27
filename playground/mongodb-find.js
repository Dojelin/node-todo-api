const{MongoClient, ObjectID} = require('mongodb'); //usando unstructured

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  db.collection('Todos').find({}).count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos');
  });

  //find({completed: false}) //buscar por algun atributo
  db.collection('Users').find({name:'Yeizi'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined,2));
  }, (err) => {
    console.log('Unable to fetch todos');
  });

  // //find({completed: false}) //buscar por algun atributo
  // db.collection('Todos').find({
  //   _id: new ObjectID('59cbae4454929a6d0cd3b151')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetch todos');
  // });
  //db.close();
});
