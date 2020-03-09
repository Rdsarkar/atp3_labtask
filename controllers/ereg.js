var express = require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('*', function(req, res, next){
	if(req.cookies['aname'] == null){
		res.redirect('/alogin');
	}else{
		next();
	}
});




router.get('/', function(req, res){
	console.log('employee Registration page requested!');
	res.render('ereg/index');
});

router.post('/', function(req, res){
		
    var employee ={
        employee_name: req.body.employee_name,
        company_name: req.body.company_name,
        contact: req.body.contact,
        e_name: req.body.e_name,
        e_pass: req.body.e_pass
    };

    userModel.e_Insert(employee, function(status){
        if(status){
            res.redirect('/elogin');
        }else{
            res.redirect('/eReg');
        }
    });
});


module.exports = router;