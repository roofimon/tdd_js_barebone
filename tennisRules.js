'use strict';

var TennisRule = function() {

    this.announce = function(counter) {
        if(counter.scoreA == 4 && counter.scoreB <=2 ) {
            return "Player A Win";
        }
        return "Start Game";
    }
    
};
