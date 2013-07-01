  hyperstorm: {
		effectType: 'Weather',
		duration: 5,
		durationCallback: function(source, effect) {
			if (source && source.item === 'razorfeather') {
				return 8;
			}
			return 5;
		},
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.type === 'Flying') {
				this.debug('rain flying boost');
				return basePower * 1.5;
			}
			if (move.type === 'Electric') {
				this.debug('rain electric suppress');
				return basePower * .5;
			}
		},
		onStart: function(battle, source, effect) {
			if (effect && effect.effectType === 'Ability') {
				this.effectData.duration = 0;
				this.add('-weather', 'HyperStorm', '[from] ability: '+effect, '[of] '+source);
			} else {
				this.add('-weather', 'HyperStorm');
			}
		},
		onResidualOrder: 1,
		onResidual: function() {
			this.add('-weather', 'HyperStorm', '[upkeep]');
			this.eachEvent('Weather');
		},
		onEnd: function() {
			this.add('-weather', 'none');
		}
	},
    clearance: {
  	effectType: 'Weather',
		duration: 5,
		durationCallback: function(source, effect) {
			if (source && source.item === 'clearancefan') {
				return 8;
			}
			return 5;
		},
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('rain flying boost');
				return basePower * 1;
			}
			if (move.type === 'Electric') {
				this.debug('rain electric suppress');
				return basePower * 1;
			}
		},
		onStart: function(battle, source, effect) {
			if (effect && effect.effectType === 'Ability') {
				this.effectData.duration = 0;
				this.add('-weather', 'none', '[from] ability: '+effect, '[of] '+source);
			} else {
				this.add('-weather', 'none');
			}
		},
		onResidualOrder: 1,
		onResidual: function() {
			this.add('-weather', 'none', '[upkeep]');
			this.eachEvent('Weather');
		},
		onEnd: function() {
			this.add('-weather', 'none');
		}
	},
