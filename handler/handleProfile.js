module.exports = function(app){
	app.get('/profile', function(req, res){
		if(req.session.user === undefined){
			res.render('login');
		}
		else{
			let user = {
				username: req.session.user.username
			};
			res.render('profile', {user});
		}
	});
}