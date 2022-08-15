const express = require('express'); //used for routing
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '../dist/week4tut/')); // serve static contect fro the app from the 'public'
                                                                    // target the build version of the angular app
                                                                    // created in the 'dist' directory'
console.log(__dirname)

const http = require('http').Server(app); //used to provide http functionality

// setup server
let server = http.listen(3000, function() {
    let host = server.address().address
    let port = server.address ().port
    console.log("Server listening on: "+ host + " port:" + port);
    });

app.post('/login', require('./routes/api-auth'));

