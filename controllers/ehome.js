var express = require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('*', function(req, res, next){
	if(req.cookies['e_name'] == null){
		res.redirect('/elogin');
	}else{
		next();
	}
});


router.get('/',function(req,res){
    res.render('ehome/ehome');
});

router.post('/',function(req,res){
    var employee={
        company_name: req.body.company_name,
        contact: req.body.contact,
        e_name: req.cookies['e_name']
    }

    userModel.eupdate(employee,function(status){
        if(status){
            console.log('update hoice');
            res.redirect('/ehome');
        }

        else{
            res.render('ehome/ehome');
        }
    })
})


module.exports = router;












module.exports = router;