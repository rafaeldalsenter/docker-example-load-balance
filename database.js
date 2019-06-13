const mongoose = require('mongoose');
mongoose.Promise = Promise;

module.exports = (uri) => {
	
	mongoose.connect(uri);
	const conn = mongoose.connection;
	
	conn.on('connected', () => 
	console.log('\n Mongoose! Connected! ' + uri));
	
	conn.on('disconnected', () => 
	console.log('\n Mongoose! Disconnected from ' + uri));
	
	conn.on('error', err =>
	console.log('\n Mongoose! Connection error: ' + err));
	
	process.on('SIGINT', () => conn.close(() => {
		console.log('\n Mongoose! Disconnected by application termination');
		process.exit(0);
	}));
};