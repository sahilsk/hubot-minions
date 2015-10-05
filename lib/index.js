var MinionToCheer = require('./minions.js');

var myMinions = new MinionToCheer();

module.exports = function(robot) {

  robot.respond(/minion$/i, function(res) {
    var reply =  myMinions.random();
    res.send( reply + '?' + Math.ceil(Math.random() * 10000) );
  });

  robot.respond(/minion (.+)/i, function(res) {
    var reply =  myMinions.find(res.match[1].trim() );
    res.send( reply + '?' + Math.ceil(Math.random() * 10000) );
  });
};
