'use strict';

console.log('Loading function');

module.exports.greetings = (event, context, callback) => {
    console.log('Received event:',
    JSON.stringify(event, null, 2));
    console.log('name =', event.name);
    var name = '';
    if ('name' in event) {
        name = event['name'];
    } else {
        name = 'World';
    }
    var greetings = 'Hello ' + name + '!';
    console.log(greetings);
    callback(null, greetings);
};
