var Tournament = function  (teams) {
	this.teams = teams;
	return this;
};

Tournament.prototype.plan = function(systemName, matchDay) {
	matchDay = parseInt(matchDay);
	var self = this;
	var result = [];
	var choosen = [];
	var choose = function(a, b) {
		var res = false;
		if (choosen.indexOf(a.toString()) === -1 && choosen.indexOf(b.toString()) === -1){
			result.push([self.teams[a], self.teams[b]]);
			choosen.push(a.toString());
			choosen.push(b.toString());
			//console.log(choosen.indexOf(a.toString()), choosen.indexOf(b.toString()), self.teams[a], self.teams[b]);
			res = true;
		}
		return res;
	};

	switch(systemName){
		case "harmonicKeyNumber":
			//console.log(matchDay);
			// iterate harmonic key number system
			for (var a = 0; a < this.teams.length; a++) {
				for (var b = 0; b < this.teams.length; b++) {
					if (a !== b ){
						var aa = a+1;
						var bb = b+1;
						var sum = aa + bb;
						//console.log(a,b, aa, bb, sum, matchDay);
						if (sum === matchDay ){
							choose(b, a);
						}
						if (sum % (this.teams.length-1) === matchDay){
							choose(a, b);
						}
					}
				}
			}

			// iterate unmatched team
			for (var c = 0; c < this.teams.length; c++) {
				for (var d = 0; d < this.teams.length; d++) {
					if (c !== d && choose(c, d)){
						break;
					}
				}
			}

			break;
	}

	//console.log(result);

	return result;
};


module.exports = Tournament;