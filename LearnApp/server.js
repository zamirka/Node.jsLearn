// Node.js entry point
var log = require('logger')(module);
var User = require('./user');
var db = require('db');
db.connect();

function run() {
    var vasya = new User('Вася');
    var petya = new User('Петя');

    vasya.hello(petya);

    log(db.getPhrase('Run successful'));

    require('readline')
   .createInterface(process.stdin, process.stdout)
   .question('Press [Enter] to exit...', function () {
       process.exit();
   });
};

if (module.parent) {
    exports.run = run;
} else {
    run();
}

