var container = require('container')

var config = {name: 'tim', age: 823823};

var id = container.deployVerticle('deploy/child.js', config, 1);
