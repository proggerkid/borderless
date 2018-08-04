let express = require('express');
let app = express();
let http = require('http');
let httpServer = http.createServer(app);
let mongoose = require('mongoose');
let session = require('express-session');
let bodyParser = require('body-parser');
let handleDatabase = require('./handler/handleDatabase');
let handleRouting = require('./routes/handleRouting');
let handleRegistration = require('./handler/handleRegistration');

//database//
handleDatabase.connect(mongoose);
let User = handleDatabase.makeUserModel(mongoose);

//view-engine//
app.set('views', './views');
app.set('view engine', 'ejs');

//Middleware//
app.use(session({
	secret: "fh8hf2387fg7683gf763gf763gf6723gf8gw78f48gf838fg837",
	resave: true,
	saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//configure app.js//
handleRouting(app);
handleRegistration(app, User);


//start http-server//
httpServer.listen(8000);