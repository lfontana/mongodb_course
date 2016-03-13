var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

// Parameters are: model name, schema, collection name
var User = mongoose.model('User', schema, 'users');

var user = new User({
  name: 'John Smith',
  email: 'john@smith.io'
});

user.save(function(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  User.find({ email: 'john@smith.io' }, function(error, docs) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    console.log(require('util').inspect(docs));
    process.exit(0);
  });
});





// Part 1 below
// var mongodb = require('mongodb');
// var movies = require('./movies');

// var mongodb = require('mongodb');
//
// var uri = 'mongodb://localhost:27017/example';
// mongodb.MongoClient.connect(uri, function(error, db) {
//   if (error) {
//     console.log(error);
//     process.exit(1);
//   }
//
//   db.collection('sample').insert({ x: 1 }, function(error, result) {
//     if (error) {
//       console.log(error);
//       process.exit(1);
//     }
//
//     db.collection('sample').find().toArray(function(error, docs) {
//       if (error) {
//         console.log(error);
//         process.exit(1);
//       }
//
//       console.log('Found docs:');
//       docs.forEach(function(doc) {
//         console.log(JSON.stringify(doc));
//       });
//       process.exit(0);
//     });
//   });
// });
//
// var fn = require('./myfile.js');
// fn();
//
// var otherFn = require('./test').other;
// otherFn();
//
// console.log("hello");
