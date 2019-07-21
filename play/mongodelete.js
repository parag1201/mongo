const {MongoClient, ObjectID} = require('mongodb'); //es5 maybe

MongoClient.connect('mongodb://localhost:27017/todoapp', {useNewUrlParser: true}, (err,client) => {
    if(err){
       return console.log('Unable to conect to the mongo server', err);
    }
    console.log('connected to sever');
    const db = client.db('todoapp');

    //deleteMany
    db.collection('todos').deleteMany({text: 'some text'}).then((result) => {
        console.log(result.result);
    });
    
    db.collection('Users').deleteMany({name: 'Jen'}).then((result) => {
        console.log(result);
    });

    db.collection('Users').deleteOne({_id : new ObjectID('5d33fd48900a5585321be7f0')}).then((result) => {
        console.log(result.result);
    });

    //deleteOne
    db.collection('todos').deleteOne({text: 'some text here'}).then((result) => {
        console.log(result.result);
    });
    
    //findOneAndDelete
    db.collection('todos').findOneAndDelete({completed:  false}).then((result) => {
        console.log(result);
    });
    


    //client.close();
});