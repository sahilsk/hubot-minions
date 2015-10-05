
function MinionToCheer(){
	this.BASE_URL = "http://sahilsk.github.io/hubot-minions/public/images/minions/";
	this.Minions = {
		"Angry-Minion-icon.png" : ['angry','what'],
		"Curious-Minion-Icon-2.png" : ['curious'],
		"Curious-Minion-Icon.png" : ['curious'],
		"Dancing-2-Minion-icon.png" : ['dance', 'dancing'],
		"Dancing-minion-icon.png" : ['dance','dancing'],
		"Edith-despicable-me-2-icon.png" : ['edith','cap', 'pink', 'girl'],
		"Evil-Minion-Icon-3.png" : ['evil', 'what'],
		"Evil-Minion-Icon-4.png" : ['evil', 'run', 'kill'],
		"Happy-Minion-Icon.png" : ['happy', 'yippe'],
		"Hello-Minion-icon.png" : ['hello','hi', 'hola'],
		"Maid-Minion-icon.png" : ['housemaid', 'maid', 'clean', 'wipe'],
		"Margo-dispicable-me-2-icon.png" : ['margo', 'girl', 'girlfriend'],
		"Minion icon.png" : ['hello', 'anyone'],
		"Minion-playing-golf-icon.png" : ['play', 'golf', 'sport'],
		"Minion-reading-icon.png" : ['reading', 'busy'],
		"Sad-Agnes-Icon.png" : ['agnes', 'sad', 'girl'],
		"Shy-Minion-icon.png" : ['shy', 'embarrass'],
		"agnes-overjoyed-icon.png" : ['agnes', 'overjoy'],
		"agnes-sleeping-icon.png" : ['agnes','sleep', 'sleeping'],
		"banana-Minion-icon.png" : ['banana', 'happy', 'hungry'],
		"evil-minion-icon-2.png" : ['evil', 'amaze', 'shock'],
		"evil-minion-icon.png" : ['evil'],
		"girl-minion-icon.png" : ['girl'],
		"gru-icon-2.png" : ['gru'],
		"gru-icon.png" : ['gru'],
		"happy-agnes-icon.png" : ['agnes', 'happy'],
		"ice-cream-Minion-icon.png" : ['ice-cream', 'icecream'],
		"kungfu-Minion.png" : ['kungfu','fight'],
		"sayhi-Minion-icon.png" : ['hi', 'hola', 'hello', 'greeting'],
		"superman-minion-icon.png" : ['superman', 'man'],
		"swimming-Minion-icon.png" : ['swim', 'swimming', 'sport'],
		"teasing-Minion-icon.png" : ['tease', 'teasing', 'fun']
	};

	this.mList = Object.keys(this.Minions);
} 

MinionToCheer.prototype.random = function(){
		var index = Math.floor( Math.random() * this.mList.length  + 0);
		return   this.BASE_URL + this.mList[index]
	};

MinionToCheer.prototype.find = function(tag){
		if( typeof tag === undefined || tag === ""){
			return this.random();
		}
		var resultKeys  = [];
		for( var i = 0; i < this.mList.length; i++){
			var tagArr = this.Minions[this.mList[i]];
			if( tagArr.indexOf(tag) !== -1 ){
				resultKeys.push( this.mList[i]);
			}
		}

		if( resultKeys.length === 0){
			return this.random();
		}
		var index = Math.floor( Math.random() * resultKeys.length  + 0);
		return   this.BASE_URL + resultKeys[index] ;

	};
module.exports = MinionToCheer;
