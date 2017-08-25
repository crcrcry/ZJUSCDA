const MongoClient = require('mongodb').MongoClient;
const DB = 'mongodb://localhost:27017/SCDA';

const MongoDB = {};

MongoDB.add = function (data, callback) {
  try {
    MongoClient.connect(DB, function (err, db) {
      let collection = db.collection('people');
      collection.insertOne(data, (err, result) => {
        if(err){
          console.log(err);
          callback(false);
        }else{
          callback(true);
        }
      })
    });
  }catch (e){
    console.log(e);
    callback(false);
  }
};

MongoDB.getAll = function (callback) {
  MongoClient.connect(DB, function (err, db) {
    let collection = db.collection('people');
    collection.find({}, (err, result) => {
      if(err){
        console.log(err);
        callback(false);
      }else{
        callback(result);
      }
    })
  })
}

module.exports = MongoDB;