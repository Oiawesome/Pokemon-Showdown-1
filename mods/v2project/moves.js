    exports.BattleMovedex = {    
        "waterpulse": {
              	inherit: true,
                basePower: 80
    	},
        "paleowave": {
              	inherit: true,
        	isNonstandard: false
    	},
        "submission": {
              	inherit: true,
                accuracy: 100,
                basePower: 120,
                category: "Physical",
                secondary: {
                        chance: 10,
                        volatileStatus: 'flinch'
        	}
    	},
    	"shadowpunch": {
    		inherit: true,
    		basePower: 90
    	},
    	"twineedle": {
		num: 41,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Deals damage to one adjacent target and hits twice, with each hit having a 20% chance to poison it. If the first hit breaks the target's Substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times. Each hit has 20% chance to poison.",
		id: "twineedle",
		name: "Twineedle",
		pp: 20,
		priority: 0,
		multihit: [2,2],
		secondary: {
			chance: 20,
			status: 'psn'
		},
		target: "normal",
		type: "Bug"
	},
      	"lunardance": {
		num: 461,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user faints and the Pokemon brought out to replace it has its HP and PP fully restored along with having any major status condition cured. Fails if the user is the last unfainted Pokemon in its party.",
		shortDesc: "User faints. Replacement is fully healed, with PP.",
		id: "lunardance",
		isViable: true,
		name: "Lunar Dance",
		pp: 20,
		priority: 0,
		isSnatchable: true,
		boosts: {
			spa: 1,
			spe: 1
		},
		target: "self",
		type: "Psychic"
	}, 
        "airslash": {
              	inherit: true,
                basePower: 90
    	},
    	"psyshock": {
	      	inherit: true,
		basePower: 90
	},
	"icywind": {
		num: 196,
	      	accuracy: 100,
		basePower: 80,
		category: "Special",
		defensiveCategory: "Physical",
		desc: "Deals damage to one adjacent target based on its Defense instead of Special Defense.",
		shortDesc: "Damages target based on Defense, not Sp. Def.",
		id: "icywind",
		name: "Icy Wind",
		pp: 10,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Psychic"
	},
	"moonblast": {
		num: 1005,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		desc: "Surronds the user with moonlight energy and releases all of that energy in one blast using up all the energy making the attacks Special Attack go down.",
		shortDesc: "Deals damage and lowers the attacker's SpA.",
		id: "moonblast",
		isViable: true,
		name: "Moonblast",
		pp: 5,
		priority: 0,
		self: {
			boosts: {
				spa: -2

			}
		},
		secondary: false,
		target: "normal",
		type: "Fairy"
	},
	"fairywind": {
		num: 1006,
	        accuracy: 100,
		basePower: 85,
		category: "Special",
		desc: "Deals damage to one adjacent target by summoning a mystical wind that has a chance to encloak the user with mystical energy that boosts speed.",
		shortDesc: "Deals damage and has 10% chance to raise speed.",
		id: "fairywind",
		isViable: true,
		name: "Fairy Wind",
		pp: 15,
		priority: 0,
		secondary: {
			chance: 10,
			self: {
				boosts: {
					spd: 1
				}
			}
		},
		target: "normal",
		type: "Fairy"
	},
	"mysticcrash": {
		num: 1007,
	        accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Deals damage to one adjacent target by crashing into the target with a cloak of mystical energy.",
		shortDesc: "Deals damage and has recoil Basically Double Edge for faries.",
		id: "mysticcrash",
		isViable: true,
		name: "Mystic Crash",
		pp: 15,
		priority: 0,
		isContact: true,
		recoil: [22,100],
		secondary: false,
		target: "normal",
		type: "Fairy"
	},
	"Star Shot": {
		num: 1008,
	        accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Deals damage to one adjacent target by summoning a star from the sky going lightspeed to hit the opponent(671 million MPH).",
		shortDesc: "A special extremespeed.",
	        id: "starshot",
		isViable: true,
		name: "Star Shot",
		pp: 5,
		priority: 2,
		secondary: false,
		target: "normal",
		type: "Fairy"
	},
};  
