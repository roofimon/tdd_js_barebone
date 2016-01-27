'use strict';
var Counter = function(){
    this.scoreA = 0;
    this.scoreB = 0;
    this.scoreToB = function() {
        this.scoreB++;
    };
    this.scoreToA = function() {
        this.scoreA++;
    };
    this.playerA = function() {
            return this.scoreA;
    };
    this.playerB = function() {
            return this.scoreB;
    };
};
