var util = require("util");
var assert = require("assert");
var should = require('should');


var coverageMode = require("fs").existsSync("./../lib-cov/index.js");
var Tournament;

try {
  Tournament = require("./../lib-cov/index.js");
} catch(e){
  Tournament = require("./../lib/index.js");
}


var log = function(obj, depth) {
    var showHidden = false;
    var colorize = true;
    console.log(util.inspect(obj, showHidden, depth, colorize));
};




describe('Tournament System', function(){
  var teams = [
    "Bielefeld",
    "Mainz",
    "Stuttgart",
    "Kaiserslautern",
    "Dortmund",
    "Mönchengladbach",
    "Leverkusen",
    "Berlin",
    "Nürnberg",
    "Hannover",
    "Frankfurt",
    "München",
    "Wolfsburg",
    "Schalke",
    "Duisburg",
    "Köln",
    "Bremen",
    "Hamburg"
  ];



  var plan = new Tournament(teams).plan("harmonicKeyNumber", 10);
  it('should find opponent for each team', function(){
    (plan.length).should.be.equal(teams.length/2);
  });

  it('should find correct opponent for match day', function(){
    plan[0][0].should.be.equal("Nürnberg");
    plan[0][1].should.be.equal("Bielefeld");

    plan[1][0].should.be.equal("Berlin");
    plan[1][1].should.be.equal("Mainz");

    plan[2][0].should.be.equal("Leverkusen");
    plan[2][1].should.be.equal("Stuttgart");

    plan[3][0].should.be.equal("Mönchengladbach");
    plan[3][1].should.be.equal("Kaiserslautern");

    plan[4][0].should.be.equal("Hannover");
    plan[4][1].should.be.equal("Bremen");

    plan[5][0].should.be.equal("Frankfurt");
    plan[5][1].should.be.equal("Köln");

    plan[6][0].should.be.equal("München");
    plan[6][1].should.be.equal("Duisburg");

    plan[7][0].should.be.equal("Wolfsburg");
    plan[7][1].should.be.equal("Schalke");

    plan[8][0].should.be.equal("Dortmund");
    plan[8][1].should.be.equal("Hamburg");
  });


  it('should work for each match day', function(){

    for (var day = 1; day < 34; day++) {
      var plan = new Tournament(teams).plan("harmonicKeyNumber", day);
      if (plan.length !== teams.length/2){
        log("matchday:", day, "plan:", plan);
      }
      (plan.length).should.be.equal(teams.length/2);
    }

  });

});