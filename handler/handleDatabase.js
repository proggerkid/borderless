module.exports = {
	connect: function(mongoose){
		mongoose.connect('mongodb://proggerkid:1Meta-Mesa1@ds125422.mlab.com:25422/borderless');
		mongoose.connection.on('error', function(){
			console.log("fail to connect to db");
		});
		mongoose.connection.once('open', function(){
			console.log("connected to db");
		});

	},

	makeUserModel: function(mongoose){
		var userSchema = new mongoose.Schema({
			username: String,
			email: String,
			password: String
		});
		return mongoose.model('user', userSchema);
	},

}