var express = require('express');
var app = express();
var cors  = require('cors');
var dal = require('./dal.js');
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

(function () {
    // Your web app's Firebase configuration, get it from your firebase project settings page on the General tab.
    const firebaseConfig = {
        apiKey: "AIzaSyAvW9f-BhUxjuIP1bVk7GSN6ozd8_gmizE",
        authDomain: "badbankauthentication.firebaseapp.com",
        projectId: "badbankauthentication",
        storageBucket: "badbankauthentication.appspot.com",
        messagingSenderId: "379845993451",
        appId: "1:379845993451:web:ea2907e725805b6414afae"
      };
    // Initialize Firebase
    //firebase.initializeApp(firebaseConfig);
    const app = initializeApp(firebaseConfig);
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
  
    // TODO: initialize provider for google auth
    const provider = new GoogleAuthProvider();})*/
app.use(express.static('public'))
app.use(cors());

// create user

app.get('/account/create/:name/:email/:password/:balance', function(req,res){
    dal.create(req.params.name,req.params.email, req.params.password, req.params.balance).
    then((user)=>{
        console.log(user);
        res.send(user);
    });
    });
/*//Authentication for user    
ap
   
})
*/
//Update balance when a deposit or withdraw is made    
app.get('/account/update/:email/:amount', (req, res)=>{
    const params = req.params;
    dal.update(params.email, parseInt(params.amount))
    .then (user =>{
        console.log(user);
        res.send(user);
    });
});


// get all accounts
app.get('/account/all', function(req,res){
    dal.all().
    then((docs)=>{
     console.log(docs);
     res.send(docs);
    });
 });
var port = 3000;
    app.listen(port);
    console.log(port);