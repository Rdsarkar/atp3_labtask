var express = require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
	console.log('Employer login page requested!');
	res.render('elogin/elogin');
});

router.post('/', function(req, res){
		
    var employee ={
        e_name: req.body.e_name,
        e_pass: req.body.e_pass
    };

    userModel.evalidate(employee, function(results){
        if(results){
            res.cookie('e_name', req.body.e_name);
            res.redirect('/ehome');
        }else{
            res.redirect('/alogin');
        }
    });
});


module.exports = router;