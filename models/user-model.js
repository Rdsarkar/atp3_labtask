var db = require('./db');

module.exports ={
	ainsert: function(admin,callback){ 
		var sql= "insert into admin values (?,?,?)";
		db.execute(sql, [null,admin.aname,admin.password],function(status){
			if(status){
				// console.log("Usermodel ok");
				callback(true);
			}
			else{
				// console.log("usermodel is not")
				callback(false);
			}
		})

	},


	avalidate: function(admin,callback){

        var sql = "select * from admin where a_name=? and a_pass=?";
            db.getResults(sql, [admin.aname, admin.password], function(results){
                if(results.length > 0){
					console.log("admin validate Working");
                    callback(true);
                }
                else{
					console.log("admin validate not working!!");
					callback(false);
                }
            });

	},


	e_Insert: function(employee,callback){

		var sql = "insert into employer values (?,?,?,?,?,?)";
		db.execute(sql,[null, employee.employee_name, employee.company_name, employee.contact,employee.e_name,employee.e_pass],function(status){
			if(status){
				// console.log("Usermodel ok");
				callback(true);	
			}else{
				// console.log("usermodel is not");
				callback(false);
			}
		})
	},

	evalidate: function(employee,callback){

        var sql = "select * from employer where e_name=? and e_pass=?";
            db.getResults(sql, [employee.e_name, employee.e_pass], function(results){
                if(results.length > 0){
					console.log("employer validate Working");
                    callback(true);
                }
                else{
					console.log("employer validate not working!!");
					callback(false);
                }
            });

	},


	eupdate: function(employee,callback){

        var sql = "update employer set c_name=?, contact=? where e_name=?";
        db.execute(sql, [employee.company_name, employee.contact, employee.e_name], function(results){
            if(results){
                callback(true);
            }
            else{ 
                callback(false);
            }
        });
	},
	


	jobInsert:function(job,callback){

		var sql = "insert into job values (?,?,?,?,?,?)";
		db.execute(sql,[null, job.company_name, job.job_title, job.salary,job.job_loc,job.e_name],function(status){
			if(status){
				console.log("job insert ok");
				callback(true);	
			}else{
				console.log("job insert is not");
				callback(false);
			}
		})
	},




}