const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }else{

    }
    console.log('Connect to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops,undefined,2))
    // });

    //Insert new doc into Users(name,age.location)

    db.collection('Users').insertOne({
       name: 'Hongyu',
       age:25,
       location:"California"
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert todo',err);
        }
        console.log(result.ops[0]._id);
    });
    client.close();
});