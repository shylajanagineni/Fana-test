// require prod configuration
var prodConfig = require('./wdio.conf.js').config;

// clone prod config and add new properties/overrides
var fanaticsConfig = Object.assign(prodConfig, {
  capabilities: {
     desiredCapabilities:{
      browserName:'firefox' 
     }
   },
  baseUrl: 'http://fanatics.com/',
  specs:['./test/*.js'],
  services: ['selenium-standalone']
});

// delete any unwanted properties
delete fanaticsConfig .user;
delete fanaticsConfig .key;
delete fanaticsConfig .sauceConnect;

// log out just to see what's in it
console.log(fanaticsConfig );

exports.config = fanaticsConfig ;
