// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID' 		: '854927964540406', // your App ID
        'clientSecret' 	: 'fbb9abb2f5857934281201aa9620de09', // your App Secret
        'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey' 		: 'your-consumer-key-here',
        'consumerSecret' 	: 'your-client-secret-here',
        'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID' 		: 'your-secret-clientID-here',
        'clientSecret' 	: 'your-client-secret-here',
        'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
    }

};
