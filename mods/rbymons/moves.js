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
        spa: -1,
        spd: -1
      }
    }
  }
};
