const {MongoClient, ObjectID} = require('mongodb'); //es5 maybe

MongoClient.connect('mongodb://localhost:27017/todoapp', {useNewUrlParser: true}, (err,client) => {
    if(err){
       return console.log('Unable to conect to the mongo server', err);
    }
    console.log('connected to sever');
    
    const db = client.db('todoapp');
    // db.collection('todos').find({
    //    completed: true
    // }).toArray().then((docs) => {
    //     console.log('todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch docs', err);
    // });
    
     db.collection('Users').find().count().then((count) => {
         console.log(`Users count: ${count}`);
     }, (err) => {
         console.log('some Error occured', err);
     });

    db.collection('Users').find({name: 'Jen'}).toArray().then((docs) => {
        console.log('Users with name Jen:');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('Unable to fetch docs', err);   
    });
    
    client.close();
});