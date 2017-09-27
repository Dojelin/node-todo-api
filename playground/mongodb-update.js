const{MongoClient, ObjectID} = require('mongodb'); //usando unstructured

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59cbc9f4953d0352afa116d7')
  }, {
    $set: {
      name: 'Susanita'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // //Update un valor fijo
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59cbbb86953d0352afa1133f')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  //db.close();
});
