var server = require('./route');
var router = require('./router');

server.start(router.route);