const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
let db = null;
//connects to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client){
    console.log('connected to db server');
    db = client.db('myproject');
});

function create(name, email, password, balance){
    return new Promise((resolve, reject)=> {
        const collection = db.collection('users');
        const doc = {name, email, password, balance};
        collection.insertOne(doc, {w:1}, function(err,result){
            err ? reject(err) : resolve(doc);
        });
    });
}

function update(email, amount){
    return new Promise((resolve, reject)=>{
        const customers = db
        .collection('users')
        .findOneAndUpdate(
            {email: email},
            {$inc: {balance: amount}},
            {returnOriginal: false},
            function(err, documents){
                err ? reject(err) : resolve(documents);
            }
        );
    });
}

function all(){
    return new Promise((resolve,reject)=>{
        const customers = db
        .collection('users')
        .find({})
        .toArray(function(err,docs){
            err ? reject(err) : resolve(docs);
        });
    })
}

module.exports = {create, all, update};