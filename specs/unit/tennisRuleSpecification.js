'use strict';
describe('Tennis Rules', function() {
		var counter;
		var rule;
		beforeEach( function() {
			counter = new Counter();
			rule = new TennisRule();
			});

		describe('Start Game', function(){
			it('announce Start Game when both score is 0', function() {
				expect(rule.announce(counter)).toBe("Start Game");
				});
			});

		describe('Deuce', function() {
			it('announce deuce when both score is 4', function(){
				setScoreTo('A', 4);
				setScoreTo('B', 4);
				expect(rule.announce(counter)).toBe("Deuce");
			});
		});

		describe('End Game', function(){
			it('should announce PlayerA win when Player A has 2 point than Player B and Player B score less than 3', function(){
				setScoreTo('A', 4);
				setScoreTo('B', 1);

				expect(rule.announce(counter)).toBe("Player A Win");
				});

			it('should annouce PlayerB win when Player A has 2 point than Player A and both score less than 4', function() {
				setScoreTo('A', 1);
				setScoreTo('B', 4);

				expect(rule.announce(counter)).toBe("Player B Win");
				});
			});

		var setScoreTo = function(player, score) {
			if(player == 'A') {
				for(var i = 1; i <= score; i++) {
					counter.scoreToA();
				}
			}else{
				for(var i = 1; i <= score; i++) {
					counter.scoreToB();
				}
			}
		};
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
