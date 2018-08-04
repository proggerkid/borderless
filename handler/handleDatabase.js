module.exports = {
	connect: function(mongoose){
		mongoose.connect('mongodb://localhost/borderless');
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