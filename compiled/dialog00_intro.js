// AUTOMATICALLY GENERATED
export const name = 'dialog00_intro';
export const dialog00_intro =
{
intStart: 0,
dc_str_labels: {
	"myra_face": 37,
	"ancient_songs": 55,
	"affrighted": 48,
	"entry": 0,
},
dc_int_dialog: {
	0: {
		nextOnEnter: 1, nextOnSkip: 1,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "In 1834, the first angel was discovered.");
			return e;
		},
	},
	1: {
		nextOnEnter: 2, nextOnSkip: 2,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "They found it in a cave in the Russian countryside.");
			return e;
		},
	},
	2: {
		nextOnEnter: 3, nextOnSkip: 3,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "Like the others, it had no name.");
			return e;
		},
	},
	3: {
		nextOnEnter: 4, nextOnSkip: 4,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "Like the others, it made an offer.");
			return e;
		},
	},
	4: {
		nextOnEnter: 5, nextOnSkip: 5,
		show: (ctx, display) => {
			var e = display.addMessage("angel");
			display.appendText(e, "Enter my pact, and I shall give you my power.");
			return e;
		},
	},
	5: {
		nextOnEnter: 6, nextOnSkip: 6,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "...");
			return e;
		},
	},
	6: {
		nextOnEnter: 7, nextOnSkip: 7,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "Two thousand five hundred years have passed. The world is different.");
			return e;
		},
	},
	7: {
		nextOnEnter: 8, nextOnSkip: 8,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "The angel is gone. In its place lies immense caverns, unnaturally dark.");
			return e;
		},
	},
	8: {
		nextOnEnter: 9, nextOnSkip: 9,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "They say there's a city in the blackness. They say there are treasures and secret knowledge.");
			return e;
		},
	},
	9: {
		nextOnEnter: 10, nextOnSkip: 10,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "They say the angel is still there, deep in the caves.");
			return e;
		},
	},
	10: {
		nextOnEnter: 11, nextOnSkip: 11,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "Many are going, for many reasons. You are one of them.");
			return e;
		},
	},
	11: {
		nextOnEnter: 12, nextOnSkip: 12,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "...");
			return e;
		},
	},
	12: {
		nextOnEnter: 13, nextOnSkip: 13,
		canEnter: (ctx) => (ctx.scene("cave")),
	},
	13: {
		nextOnEnter: 14, nextOnSkip: 14,
		show: (ctx, display) => {
			var e = display.addMessage("myra");
			display.appendText(e, "Art thou ");
			display.appendTextOrElement(e, (ctx.explore("affrighted")));
			display.appendText(e, "? Thine idle legs shall make the journey slow.");
			return e;
		},
	},
	14: {
		nextOnEnter: 15, nextOnSkip: 15,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "She's ");
			display.appendTextOrElement(e, (ctx.explore("staring at you", "myra_face")));
			display.appendText(e, ". The torch drips Wax across your fingers.");
			return e;
		},
	},
	15: {
		nextOnEnter: 16, nextOnSkip: 27,
		options: [15, 21, 25, ],
		show: (ctx, display) => {
			var e = display.addReplyButton();
			display.appendText(e, "The torches are going dim.");
			return e;
		},
	},
	16: {
		nextOnEnter: 17, nextOnSkip: 18,
		show: (ctx, display) => {
			var e = display.addMessage("myra");
			display.appendText(e, "As is their course. The caverns layer darkness upon itself, folding it like a veil.");
			return e;
		},
	},
	17: {
		nextOnEnter: 18, nextOnSkip: 18,
		show: (ctx, display) => {
			var e = display.addMessage("myra");
			display.appendText(e, "Soon they shall scarcely light our feet.");
			return e;
		},
	},
	18: {
		nextOnEnter: 20, nextOnSkip: 20,
		options: [18, 19, ],
		show: (ctx, display) => {
			var e = display.addReplyButton();
			display.appendText(e, "We won't make much progress if they go out.");
			return e;
		},
	},
	19: {
		nextOnEnter: 20, nextOnSkip: 20,
		show: (ctx, display) => {
			var e = display.addReplyButton();
			display.appendText(e, "What do we do then?");
			return e;
		},
	},
	20: {
		nextOnEnter: 27, nextOnSkip: 27,
		show: (ctx, display) => {
			var e = display.addMessage(ctx.defaultSpeaker);
			display.appendText(e, "Worry not, I can hear the ");
			display.appendTextOrElement(e, (ctx.explore("chants", "ancient_songs")));
			display.appendText(e, ". They shall guide us.");
			return e;
		},
	},
	21: {
		nextOnEnter: 22, nextOnSkip: 27,
		show: (ctx, display) => {
			var e = display.addReplyButton();
			display.appendText(e, "The path is narrow.");
			return e;
		},
	},
	22: {
		nextOnEnter: 23, nextOnSkip: 23,
		show: (ctx, display) => {
			var e = display.addMessage("myra");
			display.appendText(e, "Better shoes would do thee good.");
			return e;
		},
	},
	23: {
		nextOnEnter: -1, nextOnSkip: 27,
		options: [23, 24, ],
		show: (ctx, display) => {
			var e = display.addReplyButton();
			display.appendText(e, "My shoes are fine. We just need to tread carefully.");
			return e;
		},
	},
	24: {
		nextOnEnter: 27, nextOnSkip: 27,
		show: (ctx, display) => {
			var e = display.addReplyButton();
			display.appendText(e, "They are a bit worn...");
			return e;
		},
	},
	25: {
		nextOnEnter: 26, nextOnSkip: 27,
		show: (ctx, display) => {
			var e = display.addReplyButton();
			display.appendText(e, "There could be others ahead.");
			return e;
		},
	},
	26: {
		nextOnEnter: 27, nextOnSkip: 27,
		show: (ctx, display) => {
			var e = display.addMessage("myra");
			display.appendText(e, "Aye. There shall be.");
			return e;
		},
	},
	27: {
		nextOnEnter: 28, nextOnSkip: 28,
		canEnter: (ctx) => (ctx.forget("affrighted")),
	},
	28: {
		nextOnEnter: 29, nextOnSkip: 29,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "You walk. It grows darker still.");
			return e;
		},
	},
	29: {
		nextOnEnter: 30, nextOnSkip: 30,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "In the distance, you year what sound like footsteps.");
			return e;
		},
	},
	30: {
		nextOnEnter: 31, nextOnSkip: 31,
		canEnter: (ctx) => (ctx.forget("myra_face")),
	},
	31: {
		nextOnEnter: 32, nextOnSkip: 32,
		canEnter: (ctx) => (ctx.forget("ancient_songs")),
	},
	32: {
		nextOnEnter: 33, nextOnSkip: -1,
		options: [32, 34, ],
		runEffects: (ctx) => [
			(ctx.skip())
		],
		show: (ctx, display) => {
			var e = display.addReplyButton();
			display.appendText(e, "(Turn off the light.)");
			return e;
		},
	},
	33: {
		nextOnEnter: -1, nextOnSkip: -1,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "You turn of your light. Myra follows suit.");
			return e;
		},
	},
	34: {
		nextOnEnter: 35, nextOnSkip: -1,
		runEffects: (ctx) => [
			(ctx.skip())
		],
		show: (ctx, display) => {
			var e = display.addReplyButton();
			display.appendText(e, "(Keep the light on.)");
			return e;
		},
	},
	35: {
		nextOnEnter: -1, nextOnSkip: -1,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "It seems like a bad idea.");
			return e;
		},
	},
	36: {
		nextOnEnter: -1, nextOnSkip: 37,
	},
	37: {
		nextOnEnter: 38, nextOnSkip: 38,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "Myra the chant-singer. Your guide.");
			return e;
		},
	},
	38: {
		nextOnEnter: 39, nextOnSkip: 39,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "Her face is more animal than human, changed by magic.");
			return e;
		},
	},
	39: {
		nextOnEnter: 40, nextOnSkip: 40,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "She has enormous eyes. Like a bird, she has to turn her entire head to look around.");
			return e;
		},
	},
	40: {
		nextOnEnter: 41, nextOnSkip: 41,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "Her ears are large and pointed, flexing and twitching when she's attentive.");
			return e;
		},
	},
	41: {
		nextOnEnter: 42, nextOnSkip: 47,
		options: [41, 45, ],
		runEffects: (ctx) => [
			(ctx.skip())
		],
		show: (ctx, display) => {
			var e = display.addReplyButton();
			display.appendText(e, " (It's disgusting.)");
			return e;
		},
	},
	42: {
		nextOnEnter: 43, nextOnSkip: 43,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "She and her cohorts live and die by ancient traditions and knowledge, but the human form seems not among those precious things.");
			return e;
		},
	},
	43: {
		nextOnEnter: 44, nextOnSkip: 44,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "They're free to contort and ruin themselves for shallow utility and aesthetic, leaving their own species behind.");
			return e;
		},
	},
	44: {
		nextOnEnter: 47, nextOnSkip: 47,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "Hypocrites. The ugliness of their meddling is the burden they deserve.");
			return e;
		},
	},
	45: {
		nextOnEnter: 46, nextOnSkip: 47,
		runEffects: (ctx) => [
			(ctx.skip())
		],
		show: (ctx, display) => {
			var e = display.addReplyButton();
			display.appendText(e, " (It's beautiful.)");
			return e;
		},
	},
	46: {
		nextOnEnter: 47, nextOnSkip: 47,
		show: (ctx, display) => {
			var e = display.addNarration();
			display.appendText(e, "She's sculpted herself into what she wants to be. Isn't that what we all want?");
			return e;
		},
	},
	47: {
		nextOnEnter: 48, nextOnSkip: 48,
		getNext: (ctx) => (ctx.back()),
	},
	48: {
		nextOnEnter: 49, nextOnSkip: 49,
		show: (ctx, display) => {
			var e = display.addMessage("you");
			display.appendText(e, "“Affrighted?”");
			return e;
		},
	},
	49: {
		nextOnEnter: 50, nextOnSkip: 50,
		show: (ctx, display) => {
			var e = display.addMessage("myra");
			display.appendText(e, "Thou dost refute the charge?");
			return e;
		},
	},
	50: {
		nextOnEnter: 51, nextOnSkip: 54,
		options: [50, 52, ],
		show: (ctx, display) => {
			var e = display.addReplyButton();
			display.appendText(e, "I'm just confused by your phrasing. It's hard to understand what you're saying, at times.");
			return e;
		},
	},
	51: {
		nextOnEnter: 54, nextOnSkip: 54,
		show: (ctx, display) => {
			var e = display.addMessage("myra");
			display.appendText(e, "I understand. We learned from the echos of ");
			display.appendTextOrElement(e, (ctx.explore("the ancient songs", "ancient_songs")));
			display.appendText(e, ". Those deaf to it are force to relearn, again and again, and lose yet more of their memory.");
			return e;
		},
	},
	52: {
		nextOnEnter: 53, nextOnSkip: 54,
		show: (ctx, display) => {
			var e = display.addReplyButton();
			display.appendText(e, "I do.");
			return e;
		},
	},
	53: {
		nextOnEnter: 54, nextOnSkip: 54,
		show: (ctx, display) => {
			var e = display.addMessage("myra");
			display.appendText(e, "Then perhaps thou shouldst walk faster.");
			return e;
		},
	},
	54: {
		nextOnEnter: 55, nextOnSkip: 55,
		getNext: (ctx) => (ctx.back()),
	},
	55: {
		nextOnEnter: 56, nextOnSkip: 60,
		options: [55, 57, ],
		show: (ctx, display) => {
			var e = display.addReplyButton();
			display.appendText(e, "What are the ancient chants? Who sang them?");
			return e;
		},
	},
	56: {
		nextOnEnter: 60, nextOnSkip: 60,
		show: (ctx, display) => {
			var e = display.addMessage("myra");
			display.appendText(e, "Every");
			return e;
		},
	},
	57: {
		nextOnEnter: 58, nextOnSkip: 60,
		show: (ctx, display) => {
			var e = display.addReplyButton();
			display.appendText(e, "How do you hear these songs?");
			return e;
		},
	},
	58: {
		nextOnEnter: 59, nextOnSkip: -1,
		show: (ctx, display) => {
			var e = display.addMessage("myra");
			display.appendText(e, "Thou canst hear it same as I, but thy mind does not notice it, mistaken for the noise of the air.");
			return e;
		},
	},
	59: {
		nextOnEnter: 60, nextOnSkip: 60,
		show: (ctx, display) => {
			var e = display.addMessage("myra");
			display.appendText(e, "It is a skill I could teach thee, in time.");
			return e;
		},
	},
	60: {
		nextOnEnter: -1, nextOnSkip: -1,
		getNext: (ctx) => (ctx.back()),
	},
}
}
