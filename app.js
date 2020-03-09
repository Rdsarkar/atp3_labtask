var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var exSession = require('express-session');
var cookieParser = require('cookie-parser');
var areg =  require('./controllers/areg');
var alogin = require('./controllers/alogin');
var ereg = require('./controllers/ereg');
var elogin = require('./controllers/elogin');
var ehome = require('./controllers/ehome');
var alogout= require('./controllers/alogout');
var elogout= require('./controllers/elogout');
var eajob= require('./controllers/eajob');
// var ram = require('./controllers/ram');

var app = express();


//configuration
app.set('view engine', 'ejs');


//middleWare
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret:'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use('/areg',areg);
app.use('/alogin',alogin);
app.use('/ereg',ereg);
app.use('/elogin',elogin);
app.use('/ehome', ehome);
app.use('/alogout',alogout);
app.use('/elogout',elogout);
app.use('/eajob',eajob);
// app.use('/ram',ram);





//routes
app.get('/', function(req, res){
	res.send('This is Lab task');
});


//server startup
app.listen(3000, function(){
	console.log('server started at 3000!');
});