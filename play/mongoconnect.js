//const mongoClient = require('mongodb').MongoClient;

//agAin OBJECT DESTRUCTURING
//is same as
const {MongoClient, ObjectID} = require('mongodb'); //es5 maybe

var obj = new ObjectID;
console.log(obj); 

//This is called OBJECT DESTRUCTURING
var user = {name: 'parag',age:20};
var {name} = user;
console.log(name);
console.log(user); 


MongoClient.connect('mongodb://localhost:27017/todoapp', {useNewUrlParser: true}, (err,client) => {
    if(err){
       return console.log('Unable to conect to the mongo server', err);
    }
    console.log('connected to sever');
    // const db = client.db('todoapp');

    // db.collection('todos').insertOne({
    //   text: 'something to do',
    //   completed: false  
    // }, (err,result) => {
    //     if(err) {
    //         return console.log('Unable to insert data',err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined,2));    
    // });

    // db.collection('Users').insertOne({
    //     name : 'Parag',
    //     age: 20,
    //     location: 'california'
    // }, (err,result) => {
    //     if(err) {
    //         return console.log('Unable to insert data',err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    client.close();
});