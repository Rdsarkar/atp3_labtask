var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	
	res.clearCookie('e_name');
	res.redirect('/elogin');
});

module.exports = router;