//AUTOMATICALLY GENERATED
	export const name = "dialog00_intro";
 export const dialog00_intro = {
intStart: 0,
dc_str_labels: {
	"entry": 0,
	"myra_face": 37,
	"affrighted": 48,
	"ancient_songs": 55,
},
dc_int_dialog: {
0: {
	nextOnEnter: 1, nextOnSkip:1,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " In 1834, the first angel was discovered.");
		},
},
1: {
	nextOnEnter: 2, nextOnSkip:2,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " They found it in a cave in the Russian countryside.");
		},
},
2: {
	nextOnEnter: 3, nextOnSkip:3,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " Like the others, it had no name.");
		},
},
3: {
	nextOnEnter: 4, nextOnSkip:4,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " Like the others, it made an offer.");
		},
},
4: {
	nextOnEnter: 5, nextOnSkip:5,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-angel");
		display.appendText(e, " Enter my pact, and I shall give you my power.");
		},
},
5: {
	nextOnEnter: 6, nextOnSkip:6,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " ...");
		},
},
6: {
	nextOnEnter: 7, nextOnSkip:7,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " Two thousand five hundred years have passed. The world is different.");
		},
},
7: {
	nextOnEnter: 8, nextOnSkip:8,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " The angel is gone. In its place lies immense caverns, unnaturally dark.");
		},
},
8: {
	nextOnEnter: 9, nextOnSkip:9,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " They say there's a city in the blackness. They say there are treasures and secret knowledge.");
		},
},
9: {
	nextOnEnter: 10, nextOnSkip:10,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " They say the angel is still there, deep in the caves.");
		},
},
10: {
	nextOnEnter: 11, nextOnSkip:11,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " Many are going, for many reasons. You are one of them.");
		},
},
11: {
	nextOnEnter: 12, nextOnSkip:12,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " ...");
		},
},
12: {
	nextOnEnter: 13, nextOnSkip:13,
	canEnter: (ctx) => (ctx.scene("cave")),
},
13: {
	nextOnEnter: 14, nextOnSkip:14,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " Art thou ");
		display.appendTextOrElement(e, ctx.explore("affrighted"));
		display.appendText(e, "? Thine idle legs shall make the journey slow.");
		},
},
14: {
	nextOnEnter: 15, nextOnSkip:15,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " She's ");
		display.appendTextOrElement(e, ctx.explore("staring at you", "myra_face"));
		display.appendText(e, ". The torch drips Wax across your fingers.");
		},
},
15: {
	nextOnEnter: 16, nextOnSkip:27,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " The torches are going dim.");
		return btn;
		},
	getOptions: () => [15, 21, 25],
},
16: {
	nextOnEnter: 17, nextOnSkip:18,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " As is their course. The caverns layer darkness upon itself, folding it like a veil.");
		},
},
17: {
	nextOnEnter: 18, nextOnSkip:18,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, "Soon they shall scarcely light our feet.");
		},
},
18: {
	nextOnEnter: 20, nextOnSkip:20,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " We won't make much progress if they go out.");
		return btn;
		},
	getOptions: () => [18, 19],
},
19: {
	nextOnEnter: 20, nextOnSkip:20,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " What do we do then?");
		return btn;
		},
},
20: {
	nextOnEnter: 27, nextOnSkip:27,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-"+ctx.defaultSpeaker);
		display.appendText(e, "Worry not, I can hear the ");
		display.appendTextOrElement(e, ctx.explore("chants", "ancient_songs"));
		display.appendText(e, ". They shall guide us.");
		},
},
21: {
	nextOnEnter: 22, nextOnSkip:27,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " The path is narrow.");
		return btn;
		},
},
22: {
	nextOnEnter: 23, nextOnSkip:23,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " Better shoes would do thee good.");
		},
},
23: {
	nextOnEnter: -1, nextOnSkip:-1,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " My shoes are fine. We just need to tread carefully.");
		return btn;
		},
	getOptions: () => [23, 24],
},
24: {
	nextOnEnter: 27, nextOnSkip:27,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " They're a bit worn, but ");
		return btn;
		},
},
25: {
	nextOnEnter: 26, nextOnSkip:27,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " There could be others ahead.");
		return btn;
		},
},
26: {
	nextOnEnter: 27, nextOnSkip:27,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " Aye. There shall be.");
		},
},
27: {
	nextOnEnter: 28, nextOnSkip:28,
	canEnter: (ctx) => (ctx.forget("affrighted")),
},
28: {
	nextOnEnter: 29, nextOnSkip:29,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " You walk. It grows darker still.");
		},
},
29: {
	nextOnEnter: 30, nextOnSkip:30,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " In the distance, you year what sound like footsteps.");
		},
},
30: {
	nextOnEnter: 31, nextOnSkip:31,
	canEnter: (ctx) => (ctx.forget("myra_face")),
},
31: {
	nextOnEnter: 32, nextOnSkip:32,
	canEnter: (ctx) => (ctx.forget("ancient_songs")),
},
32: {
	nextOnEnter: 33, nextOnSkip:36,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, "(Turn off the light.)");
		return btn;
		},
	canEnter: (ctx) => (ctx.skip()),
	getOptions: () => [32, 34],
},
33: {
	nextOnEnter: 36, nextOnSkip:36,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " You turn of your light. Myra follows suit.");
		},
},
34: {
	nextOnEnter: 35, nextOnSkip:36,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, "(Keep the light on.)");
		return btn;
		},
	canEnter: (ctx) => (ctx.skip()),
},
35: {
	nextOnEnter: 36, nextOnSkip:36,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " It seems like a bad idea.");
		},
},
36: {
	nextOnEnter: 37, nextOnSkip:37,
	canEnter: (ctx) => (ctx.exit()),
},
37: {
	nextOnEnter: 38, nextOnSkip:38,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " Myra the chant-singer. Your guide.");
		},
},
38: {
	nextOnEnter: 39, nextOnSkip:39,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " Her face is more animal than human, changed by magic.");
		},
},
39: {
	nextOnEnter: 40, nextOnSkip:40,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " She has enormous eyes. Like a bird, she has to turn her entire head to look around.");
		},
},
40: {
	nextOnEnter: 41, nextOnSkip:41,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " Her ears are large and pointed, flexing and twitching when she's attentive.");
		},
},
41: {
	nextOnEnter: 42, nextOnSkip:47,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " (It's disgusting.)");
		return btn;
		},
	canEnter: (ctx) => (ctx.skip()),
	getOptions: () => [41, 45],
},
42: {
	nextOnEnter: 43, nextOnSkip:43,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " She and her cohorts live and die by ancient traditions and knowledge, but the human form seems not among those precious things.");
		},
},
43: {
	nextOnEnter: 44, nextOnSkip:44,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " They're free to contort and ruin themselves for shallow utility and aesthetic, leaving their own species behind.");
		},
},
44: {
	nextOnEnter: 47, nextOnSkip:47,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " Hypocrites. The ugliness of their meddling is the burden they deserve.");
		},
},
45: {
	nextOnEnter: 46, nextOnSkip:47,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " (It's beautiful.)");
		return btn;
		},
	canEnter: (ctx) => (ctx.skip()),
},
46: {
	nextOnEnter: 47, nextOnSkip:47,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " She's sculpted herself into what she wants to be. Isn't that what we all want?");
		},
},
47: {
	nextOnEnter: 48, nextOnSkip:48,
	canEnter: (ctx) => (ctx.back()),
},
48: {
	nextOnEnter: 49, nextOnSkip:49,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-you");
		display.appendText(e, " “Affrighted?”");
		},
},
49: {
	nextOnEnter: 50, nextOnSkip:50,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " Thou dost refute the charge?");
		},
},
50: {
	nextOnEnter: 51, nextOnSkip:54,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " I'm just confused by your phrasing. It's hard to understand what you're saying, at times.");
		return btn;
		},
	getOptions: () => [50, 52],
},
51: {
	nextOnEnter: 54, nextOnSkip:54,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " I understand. We learned from the echos of ");
		display.appendTextOrElement(e, ctx.explore("the ancient songs", "ancient_songs"));
		display.appendText(e, ". Those deaf to it are force to relearn, again and again, and lose yet more of their memory.");
		},
},
52: {
	nextOnEnter: 53, nextOnSkip:54,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " I do.");
		return btn;
		},
},
53: {
	nextOnEnter: 54, nextOnSkip:54,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " Then perhaps thou shouldst walk faster.");
		},
},
54: {
	nextOnEnter: 55, nextOnSkip:55,
	canEnter: (ctx) => (ctx.back()),
},
55: {
	nextOnEnter: 56, nextOnSkip:60,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " What are the ancient chants? Who sang them?");
		return btn;
		},
	getOptions: () => [55, 57],
},
56: {
	nextOnEnter: 60, nextOnSkip:60,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " Every");
		},
},
57: {
	nextOnEnter: 58, nextOnSkip:60,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " How do you hear these songs?");
		return btn;
		},
},
58: {
	nextOnEnter: 59, nextOnSkip:60,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " Thou canst hear it same as I, but thy mind does not notice it, mistaken for the noise of the air.");
		},
},
59: {
	nextOnEnter: 60, nextOnSkip:60,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, "It is a skill I could teach thee, in time.");
		},
},
60: {
	nextOnEnter: -1, nextOnSkip:-1,
	canEnter: (ctx) => (ctx.back()),
},
}}