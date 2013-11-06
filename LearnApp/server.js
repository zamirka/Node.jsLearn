// Node.js entry point
var user = require('./user');

var vasya = new user.User('Вася');
var petya = new User('Petya');

vasya.hello(petya);

require('readline')
.createInterface(process.stdin, process.stdout)
.question('Press [Enter] to exit...', function () {
    process.exit();
});