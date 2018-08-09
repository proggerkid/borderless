module.exports = function(app, User){
	app.post('/registration', function(req, res){
		let userData = {
			username: req.body.username,
			email: req.body.email,
			password: req.body.password
		};

		makeRegistration(User, userData, res);
	})
}

function makeRegistration(User, userData, res){
	User.find({username: userData.username, email: userData.email}, function(err, data){
		if(err){

		}
		else if(data.length > 0){
			res.render('index');
		}
		else{
			newUser = new User({
				username: userData.username,
				email: userData.email,
				password: userData.password
			});
			newUser.save();
			res.render('index');
		}
	});
}