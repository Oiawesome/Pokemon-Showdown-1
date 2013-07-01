exports.BattleItems = {
	"choiceband": {
		inherit: true,
		onStart: null
	},
	"choicescarf": {
		inherit: true,
		onStart: null
	},
	"choicespecs": {
		inherit: true,
		onStart: null
	},
	"custapberry": {
		id: "custapberry",
		name: "Custap Berry",
		spritenum: 86,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ghost"
		},
		onBeforeTurn: function(pokemon) {
<<<<<<< HEAD
			if (pokemon.hp <= pokemon.maxhp/4 || (pokemon.hp <= pokemon.maxhp/2 && pokemon.ability === 'Gluttony')) {
=======
			if (pokemon.hp <= pokemon.maxhp/4 || (pokemon.hp <= pokemon.maxhp/2 && pokemon.ability === 'gluttony')) {
>>>>>>> f02eb27b188eead529ace8dc1916f07b8e6672c5
				var decision = this.willMove(pokemon);
				if (!decision) return;
				this.addQueue({
					choice: 'event',
					event: 'Custap',
					priority: decision.priority + .1,
					pokemon: decision.pokemon,
					move: decision.move,
					target: decision.target
				});
			}
		},
		onCustap: function(pokemon) {
			var decision = this.willMove(pokemon);
			this.debug('custap decision: '+decision);
			if (decision) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			var decision = this.willMove(pokemon);
			this.debug('custap eaten: '+decision);
			if (decision) {
				this.cancelDecision(pokemon);
<<<<<<< HEAD
				this.add('r-custap '+pokemon.id);
=======
				this.add('-message', "Custap Berry activated.");
>>>>>>> f02eb27b188eead529ace8dc1916f07b8e6672c5
				this.runDecision(decision);
			}
		},
		desc: "Activates at 25% HP. Next move used goes first. One-time use."
	},
	"lifeorb": {
<<<<<<< HEAD
		inherit: true,
=======
		id: "lifeorb",
		name: "Life Orb",
		spritenum: 249,
		fling: {
			basePower: 30
		},
>>>>>>> f02eb27b188eead529ace8dc1916f07b8e6672c5
		onBasePower: function(basePower, user, target) {
			if (!target.volatiles['substitute']) {
				user.addVolatile('lifeorb');
			}
			return basePower * 1.3;
<<<<<<< HEAD
		}
=======
		},
		effect: {
			duration: 1,
			onAfterMoveSecondarySelf: function(source, target, move) {
				if (move && move.effectType === 'Move' && source && source.volatiles['lifeorb']) {
					this.damage(source.maxhp/10, source, source, this.getItem('lifeorb'));
					source.removeVolatile('lifeorb');
				}
			}
		},
		num: 270,
		gen: 4,
		desc: "Holder's damaging moves do 1.3x damage; loses 1/10 max HP after the attack."
>>>>>>> f02eb27b188eead529ace8dc1916f07b8e6672c5
	},
	"mentalherb": {
		id: "mentalherb",
		name: "Mental Herb",
		spritenum: 285,
		fling: {
			basePower: 10,
			effect: function(pokemon) {
				pokemon.removeVolatile('attract');
			}
		},
		onUpdate: function(pokemon) {
			if (pokemon.volatiles.attract && pokemon.useItem()) {
				pokemon.removeVolatile('attract');
			}
		},
		desc: "Cures infatuation. One-time use."
	},
	"metronome": {
		inherit: true,
		effect: {
			onBasePower: function(basePower, pokemon, target, move) {
				if (pokemon.item !== 'metronome') {
					pokemon.removeVolatile('metronome');
					return;
				}
				if (!this.effectData.move || this.effectData.move !== move.id) {
					this.effectData.move = move.id;
					this.effectData.numConsecutive = 0;
				} else if (this.effectData.numConsecutive < 10) {
					this.effectData.numConsecutive++;
				}
				return basePower * (1+(this.effectData.numConsecutive/10));
			}
		}
	}
};
