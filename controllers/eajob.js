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
    res.render('eajob/eajob');
});

router.post('/',function(req,res){
    var job={
        company_name: req.body.company_name,
        job_title: req.body.job_title,
        salary: req.body.salary,
        job_loc: req.body.job_loc,
        e_name: req.cookies['e_name']
    }

    userModel.jobInsert(job,function(status){
        if(status){
            console.log('Job Insert hoice');
            res.redirect('/ehome');
        }

        else{
            res.render('eajob/eajob');
        }
    })
})


module.exports = router;












