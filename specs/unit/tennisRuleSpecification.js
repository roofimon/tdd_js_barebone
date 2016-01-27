'use strict';
describe('Tennis Rules', function() {
    describe('Start Game', function(){
        it('announce Start Game when both score is 0', function() {
            var counter = new Counter();
            var rule = new TennisRule();

            var score = rule.announce(counter);
            expect(score).toBe("Start Game");
        });
    });
    describe('End Game', function(){
        it('should announce PlayerA win when Player A has 2 point than Player B and both score less than 4', function(){
            var counter = new Counter();
            counter.scoreToB();
            counter.scoreToA();
            counter.scoreToA();
            counter.scoreToA();
            counter.scoreToA();
            var rule = new TennisRule();

            expect(rule.announce(counter)).toBe("Player A Win");
        });
    });


});

describe('Counter', function() {
    var counter;
    beforeEach(function(){
        counter = new Counter();
    });
    it('should set both score to 0 when game start', function() {
        expect(counter.playerA()).toBe(0);
        expect(counter.playerB()).toBe(0);
    });

    it('should increase score one point', function(){
        counter.scoreToA();
        counter.scoreToB();
        expect(counter.playerA()).toBe(1);
        expect(counter.playerB()).toBe(1);
    });
});
