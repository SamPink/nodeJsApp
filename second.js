var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandaler = function (){
    console.log('ye')
}

eventEmitter.on('scream', myEventHandaler);

eventEmitter.emit('scream')