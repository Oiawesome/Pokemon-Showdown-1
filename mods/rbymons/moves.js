function clampIntRange(num, min, max) {
  num = Math.floor(num);
  if (num < min) num = min;
  if (typeof max !== 'undefined' && num > max) num = max;
  return num;
}

exports.BattleMovedex = {
  amnesia: {
    inherit: true,
    desc: "Raises the user's Special by 2 stages.",
    shortDesc: "Boosts the user's Special by 2.",
    boosts: {
      spd: 2,
      spa: 2
    }
  },
  tailglow: {
    inherit: true,
    desc: "Raises the user's Special by 2 stages.",
    shortDesc: "Boosts the user's Special by 2.",
    boosts: {
      spd: 2,
      spa: 2
    }
  },
  nastyplot: {
    inherit: true,
    desc: "Raises the user's Special by 1 stage.",
    shortDesc: "Boosts the user's Special by 1.",
    boosts: {
      spd: 1,
      spa: 1
    }
  },
  shellsmash: {
    inherit: true,
    desc: "Raises the user's Attack and Speed by 2 stages, but lowers Defense.",
    shortDesc: "Boosts the user's Attack and Speed by 2, lowers Defense by 1.",
    boosts: {
      atk: 2,
      def: -1,
      spe: 2
    }
  },
  acid: {
    inherit: true,
    secondary: {
      chance: 10,
      boosts: {
        spa: -1,
        spd: -1
      }
    }
  },
  acidspray: {
    inherit: true,
    secondary: {
      chance: 100,
      boosts: {
        spa: -2,
        spd: -2
      }
    }
  }
  acupressure: {
    inherit: true,
    onHit: function(target) {
      var stats = [];
      for (var i in target.boosts) {
        if (target.boosts[i] < 6) {
          stats.push(i);
        }
      }
      if (stats.length) {
        var i = stats[this.random(stats.length)];
        var boost = {};
        boost[i] = 2;
        this.boost(boost);
        if (boost = spa) {
          boosts: {
            spd: 2
          }
        } else if (boost = spd) {
          boosts: {
            spa: 2
          }
        }
      } else {
      return false;
      }
    }
  },
  bugbuzz: {
    inherit: true,
    secondary: {
      chance: 10,
      boosts: {
        spa: -1,
        spd: -1
      }
    }
  },
  captivate: {
    inherit: true,
    onTryHit: function(pokemon, source) {
      if ((pokemon.gender === 'M' && source.gender === 'F') || (pokemon.gender === 'F' && source.gender === 'M')) {
      return;
      }
      return false;
    },
    boosts: {
      spa: -1,
      spd: -1
    }
  },
  charge: {
    inherit: true,
    volatileStatus: 'charge',
    onHit: function(pokemon) {
      this.add('-activate', pokemon, 'move: Charge');
    },
    effect: {
      duration: 2,
      onRestart: function(pokemon) {
        this.effectData.duration = 2;
      },
      onBasePower: function(basePower, attacker, defender, move) {
        if (move.type === 'Electric') {
          this.debug('charge boost');
          return basePower * 2;
        }
      }
    },
    boosts: {
      spa: 1,
      spd: 1
    }
  },
  chargebeam: {
    inherit: true,
    secondary: {
      chance: 70,
      self: {
        boosts: {
          spa: 1,
          spd: 1
        }
      }
    }
  },
  closecombat: {
    inherit: true,
    self: {
      boosts: {
        def: -2
      }
    }
  },
  cosmicpower: {
    inherit: true,
    pp: 10,
    boosts: {
      def: 1,
      spa: 1,
      spd: 1
    }
  },
  defendorder: {
    inherit: true,
    boosts: {
      def: 1,
      spa: 1,
      spd: 1
    }
  }
};
