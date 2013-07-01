exports.BattleStatuses = {
	par: {
		inherit: true,
		onBeforeMovePriority: 2,
		onBeforeMove: function(pokemon) {
			if (pokemon.ability !== 'magicguard' && this.random(4) === 0) {
<<<<<<< HEAD
				this.add('cant', pokemon.id, 'par');
=======
				this.add('cant', pokemon, 'par');
>>>>>>> f02eb27b188eead529ace8dc1916f07b8e6672c5
				return false;
			}
		}
	},
	slp: {
		effectType: 'Status',
		onStart: function(target) {
<<<<<<< HEAD
			this.add('-status', target.id, 'slp');
=======
			this.add('-status', target, 'slp');
>>>>>>> f02eb27b188eead529ace8dc1916f07b8e6672c5
			// 1-4 turns
			this.effectData.time = this.random(2,6);
		},
		onBeforeMovePriority: 2,
		onBeforeMove: function(pokemon, target, move) {
			if (pokemon.getAbility().isHalfSleep) {
				pokemon.statusData.time--;
			}
			pokemon.statusData.time--;
			if (pokemon.statusData.time <= 0) {
				pokemon.cureStatus();
				return;
			}
<<<<<<< HEAD
			this.add('cant', pokemon.id, 'slp');
=======
			this.add('cant', pokemon, 'slp');
>>>>>>> f02eb27b188eead529ace8dc1916f07b8e6672c5
			if (move.sleepUsable) {
				return;
			}
			return false;
		}
	},
	partiallytrapped: {
		inherit: true,
		durationCallback: function(target, source) {
			if (source.item === 'gripclaw') return 6;
			return this.random(3,7);
		}
	},
	stall: {
		// In gen 4, the chance of protect succeeding does not fall below 1/8.
		// See http://upokecenter.dreamhosters.com/dex/?lang=en&move=182
		inherit: true,
		counterMax: 8
	}
};
