module.exports = function(robot) {
  robot.hear(/sonu/i, function(res) {
  	console.log("sonu");
  	 res.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS");
  });
  return robot.respond(/open the pod bay doors/i, function(res) {
  	console.log("badger rpely");
  	res.emote("makes a freshly baked pie")
  	res.send("makes a freshly baked pie")
  	res.reply("hi");
  });
};
