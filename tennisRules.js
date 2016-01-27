'use strict';

var TennisRule = function() {

    this.announce = function(counter) {
        if(counter.playerA() == 4 && counter.playerB() <= 2 ) {
            return "Player A Win";
        }
        if(counter.playerA() <= 2 && counter.playerB() == 4 ) {
            return "Player B Win";
        }
        return "Start Game";
    }

};
