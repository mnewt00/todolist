const express = require("express");
const bodyParser = require("body-parser");
const firebase = require("firebase");

  var config = {
    apiKey: "AIzaSyDbsyFly-WeLf45FF2ECP59rDvTAfiSe7E",
    authDomain: "todolistapi-0.firebaseapp.com",
    databaseURL: "https://todolistapi-0.firebaseio.com",
    projectId: "todolistapi-0",
    storageBucket: "todolistapi-0.appspot.com",
    messagingSenderId: "175604027560"
  };
  firebase.initializeApp(config);

const api = express();
api.use(express.static(__dirname + '/public'));  
api.use(bodyParser.json());

  api.listen(3000, '0.0.0.0', () => {
      console.log('API has started')
      console.log('')
      console.log('(Done)')
  });
  
//  api.get('/', (req, res) => {
//      res.send('Hello World');
//});
  
api.post('/add', (req, res) => {
    console.log(req.body);
    res.send('It works.');
    
    
});

  //https://youtu.be/HsKN5wBODe0?t=310
//https://youtu.be/HsKN5wBODe0?t=310
//https://youtu.be/HsKN5wBODe0?t=310
//https://youtu.be/HsKN5wBODe0?t=310
//https://youtu.be/HsKN5wBODe0?t=310
//https://youtu.be/HsKN5wBODe0?t=310
//https://youtu.be/HsKN5wBODe0?t=310