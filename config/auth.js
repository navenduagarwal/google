// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '281291995359730', // your App ID
		'clientSecret' 	: 'b59d307d4eebe6866420c9eec41dedc3', // your App Secret
		'callbackURL' 	: 'http://127.0.0.1:8080/auth/facebook/callback'
	},


	'twitterAuth' : {
		'consumerKey' 		: '17oUtPNcKngBlo6mKUw',
		'consumerSecret' 	: 'pwuAYCkv0fruJuoxU7kJhUAzNXZ4D1cfHd0sTrp4lI',
		'callbackURL' 		: 'http://127.0.0.1:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '230502152212.apps.googleusercontent.com',
		'clientSecret' 	: 'a1pV7KxeQ-nHKeZ09NMWWoNV',
		'callbackURL' 	: 'http://127.0.0.1:8080/auth/google/callback'
	}

};