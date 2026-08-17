//AUTOMATICALLY GENERATED
export const name = "dialog00_intro";
export const dialog00_intro
 = {
dc_str_labels: {
	"entry": 0,
	"myra_face": 36,
	"affrighted": 47,
	"ancient_songs": 54,
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
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " You and your guide tread down what might have once been a stairway.");
		},
},
14: {
	nextOnEnter: 15, nextOnSkip:15,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " The torches, aided by magic, drip warm Wax across your fingers.");
		},
},
15: {
	nextOnEnter: 16, nextOnSkip:16,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " She's ");
		display.appendTextOrElement(e, ctx.explore("staring at you. ", "myra_face"));
		},
},
16: {
	nextOnEnter: 17, nextOnSkip:17,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " Art thou ");
		display.appendTextOrElement(e, ctx.explore("affrighted"));
		display.appendText(e, "? Thine idle legs shall make the journey slow.");
		},
},
17: {
	nextOnEnter: 18, nextOnSkip:29,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " The torches are going dim.");
		return btn;
		},
	getOptions: () => [17, 23, 27],
},
18: {
	nextOnEnter: 19, nextOnSkip:20,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " As is their course. The caverns layer darkness upon itself, folding it like a veil.");
		},
},
19: {
	nextOnEnter: 20, nextOnSkip:20,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, "Soon they shall scarcely light our feet.");
		},
},
20: {
	nextOnEnter: 22, nextOnSkip:22,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " We won't make ");
		var _we = document.createElement('i');
		e.appendChild(_we); e = _we;
		display.appendText(e, "any");
		e = e.parentElement;
		display.appendText(e, " progress if they go out.");
		return btn;
		},
	getOptions: () => [20, 21],
},
21: {
	nextOnEnter: 22, nextOnSkip:22,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " What do we do then?");
		return btn;
		},
},
22: {
	nextOnEnter: 29, nextOnSkip:29,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-"+ctx.defaultSpeaker);
		display.appendText(e, "Worry not, I can hear the ");
		display.appendTextOrElement(e, ctx.explore("ancient songs ", "ancient_songs"));
		display.appendText(e, ". They shall guide us.");
		},
},
23: {
	nextOnEnter: 24, nextOnSkip:29,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " The path is narrow.");
		return btn;
		},
},
24: {
	nextOnEnter: 25, nextOnSkip:25,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " Better shoes would do thee good.");
		},
},
25: {
	nextOnEnter: -1, nextOnSkip:-1,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " My shoes are fine. We just need to tread carefully.");
		return btn;
		},
	getOptions: () => [25, 26],
},
26: {
	nextOnEnter: 29, nextOnSkip:29,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " They're a bit worn, but ");
		return btn;
		},
},
27: {
	nextOnEnter: 28, nextOnSkip:29,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " There could be others ahead.");
		return btn;
		},
},
28: {
	nextOnEnter: 29, nextOnSkip:29,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " Aye. There shall be.");
		},
},
29: {
	nextOnEnter: 30, nextOnSkip:30,
	canEnter: (ctx) => (ctx.forget("affrighted")),
},
30: {
	nextOnEnter: 31, nextOnSkip:31,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " You walk. It grows darker still.");
		},
},
31: {
	nextOnEnter: 32, nextOnSkip:32,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " In the distance, you year what sounds like footsteps.");
		},
},
32: {
	nextOnEnter: 35, nextOnSkip:35,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, "(Turn off the light.)");
		return btn;
		},
	canEnter: (ctx) => (ctx.skip()),
	getOptions: () => [32, 33],
},
33: {
	nextOnEnter: 34, nextOnSkip:35,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, "(Keep the light on.)");
		return btn;
		},
	canEnter: (ctx) => (ctx.skip()),
},
34: {
	nextOnEnter: 35, nextOnSkip:35,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " It seems like a bad idea.");
		},
},
35: {
	nextOnEnter: 36, nextOnSkip:36,
	canEnter: (ctx) => (ctx.exit()),
},
36: {
	nextOnEnter: 37, nextOnSkip:37,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " Myra the chant-singer. Your guide.");
		},
},
37: {
	nextOnEnter: 38, nextOnSkip:38,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " Her face is more animal than human, changed by magic.");
		},
},
38: {
	nextOnEnter: 39, nextOnSkip:39,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " She has enormous eyes. Like a bird, she has to turn her entire head to look around.");
		},
},
39: {
	nextOnEnter: 40, nextOnSkip:40,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " Her ears are large and pointed, flexing and twitching when she's attentive.");
		},
},
40: {
	nextOnEnter: 41, nextOnSkip:46,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " (It's disgusting.)");
		return btn;
		},
	canEnter: (ctx) => (ctx.skip()),
	getOptions: () => [40, 44],
},
41: {
	nextOnEnter: 42, nextOnSkip:42,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " She and her cohorts live and die by ancient traditions and knowledge, but the human form seems not among those precious things.");
		},
},
42: {
	nextOnEnter: 43, nextOnSkip:43,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " They're free to contort and ruin themselves for shallow utility and aesthetic, leaving their own species behind.");
		},
},
43: {
	nextOnEnter: 46, nextOnSkip:46,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " Hypocrites. The ugliness of their meddling is the burden they deserve.");
		},
},
44: {
	nextOnEnter: 45, nextOnSkip:46,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " (It's beautiful.)");
		return btn;
		},
	canEnter: (ctx) => (ctx.skip()),
},
45: {
	nextOnEnter: 46, nextOnSkip:46,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " She's sculpted herself into what she wants to be. Isn't that what we all want?");
		},
},
46: {
	nextOnEnter: 47, nextOnSkip:47,
	canEnter: (ctx) => (ctx.back()),
},
47: {
	nextOnEnter: 48, nextOnSkip:48,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-you");
		display.appendText(e, " “Affrighted?”");
		},
},
48: {
	nextOnEnter: 49, nextOnSkip:49,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " Thou dost refute the charge?");
		},
},
49: {
	nextOnEnter: 50, nextOnSkip:53,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " I'm just confused by your phrasing. It's hard to understand what you're saying, at times.");
		return btn;
		},
	getOptions: () => [49, 51],
},
50: {
	nextOnEnter: 53, nextOnSkip:53,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " I understand. We learned from the echos of ");
		display.appendTextOrElement(e, ctx.explore("the ancient songs ", "ancient_songs"));
		display.appendText(e, ". Those deaf to it are force to relearn, again and again, and lose yet more of their memory.");
		},
},
51: {
	nextOnEnter: 52, nextOnSkip:53,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " I do.");
		return btn;
		},
},
52: {
	nextOnEnter: 53, nextOnSkip:53,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " Then perhaps thou shouldst walk faster.");
		},
},
53: {
	nextOnEnter: 54, nextOnSkip:54,
	canEnter: (ctx) => (ctx.back()),
},
54: {
	nextOnEnter: 55, nextOnSkip:57,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " What are the ancient chants? Who sang them?");
		return btn;
		},
	getOptions: () => [54, 56],
},
55: {
	nextOnEnter: 57, nextOnSkip:57,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " ");
		},
},
56: {
	nextOnEnter: 57, nextOnSkip:57,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();var btn = e;
		display.appendText(e, " How do you hear these songs?");
		return btn;
		},
},
57: {
	nextOnEnter: -1, nextOnSkip:-1,
	canEnter: (ctx) => (ctx.back()),
},
}}