module.exports = function(app, User){
	app.post('/login', function(req, res){
		let userData = {
			username: req.body.username,
			password: req.body.password
		};

		makeLogin(userData, User, req, res);
	});
}

function makeLogin(userData, User, req, res){
	User.find({username: userData.username, password: userData.password}, function(err, data){
		if(err){

		}
		else if(data.length === 0){
			res.render('login');
		}
		else{
			req.session.user = userData;
			res.render('index');
		}
	});
}