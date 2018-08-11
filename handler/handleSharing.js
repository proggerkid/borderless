let fs = require('fs');
let path = require('path');

module.exports = function(app){
	app.get('/share', function(req, res){
		if(req.session.user === undefined){
			res.render('login');
		}
		else{
			var fileNames = fs.readdirSync('./upload');
			res.render('sharing', {links: fileNames});
		}
	});

	app.get('/download', function(req, res){
		console.log(req.url);
		res.render('sharing', {links: []});
	});

	app.post('/shareUpload', function(req, res){
		if(req.files){
			let file = req.files.data;
			let filename = file.name;
			console.log(file);
			file.mv("./upload/"+filename, function(err){
				if(err){
					console.log(err);
					res.render('index');
				}
				else{
					res.render('sharing');
				}
			})
		}
	});
}