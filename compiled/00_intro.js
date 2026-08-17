//AUTOMATICALLY GENERATED
export const name = "dialog00_intro";
export const dialog00_intro
 = {
dc_str_labels: {
	"entry": 0,
	"myra_face": 26,
	"affrighted": 35,
	"ancient_songs": 42,
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
		display.appendText(e, " Two thousand five hundred years have passed. The world is different.");
		},
},
6: {
	nextOnEnter: 7, nextOnSkip:7,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " The angel is gone. In its place lies immense caverns, unnaturally dark.");
		},
},
7: {
	nextOnEnter: 8, nextOnSkip:8,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " They say there's a city in the blackness. They say there are treasures and secret knowledge.");
		},
},
8: {
	nextOnEnter: 9, nextOnSkip:9,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " They say the angel is still there, deep in the caves.");
		},
},
9: {
	nextOnEnter: 10, nextOnSkip:10,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " Many are going, for many reasons. You are one of them.");
		},
},
10: {
	nextOnEnter: 11, nextOnSkip:11,
	canEnter: (ctx) => (ctx.scene("cave")),
},
11: {
	nextOnEnter: 12, nextOnSkip:12,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " You and your guide tread down what might have been a stairway, centuries ago.");
		},
},
12: {
	nextOnEnter: 13, nextOnSkip:13,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " The torches, aided by magic, drip warm Wax across your fingers.");
		},
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
	nextOnEnter: 15, nextOnSkip:24,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();
		display.appendText(e, " The torches are going dim.");
		},
	getOptions: () => [14, 18, 22],
},
15: {
	nextOnEnter: 16, nextOnSkip:17,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " As is their course. The caverns layer darkness upon itself, folding it like a veil.");
		},
},
16: {
	nextOnEnter: 17, nextOnSkip:17,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, "Soon they shall scarcely light our feet.");
		},
},
17: {
	nextOnEnter: 24, nextOnSkip:24,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();
		display.appendText(e, " We won't make ");
		var _we = document.createElement('i');
		e.appendChild(_we); e = _we;
		display.appendText(e, "any");
		e = e.parentElement;
		display.appendText(e, " progress if they go out.");
		},
	getOptions: () => [17],
},
18: {
	nextOnEnter: 19, nextOnSkip:24,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();
		display.appendText(e, " The path is narrow.");
		},
},
19: {
	nextOnEnter: 20, nextOnSkip:20,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " Better shoes would do thee good.");
		},
},
20: {
	nextOnEnter: -1, nextOnSkip:-1,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();
		display.appendText(e, " My shoes are fine. We just need to tread carefully.");
		},
	getOptions: () => [20, 21],
},
21: {
	nextOnEnter: 24, nextOnSkip:24,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();
		display.appendText(e, " They're a bit worn, but ");
		},
},
22: {
	nextOnEnter: 23, nextOnSkip:24,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();
		display.appendText(e, " There could be others ahead.");
		},
},
23: {
	nextOnEnter: 24, nextOnSkip:24,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " Aye. There shall be.");
		},
},
24: {
	nextOnEnter: 25, nextOnSkip:25,
	canEnter: (ctx) => (ctx.forget("affrighted")),
},
25: {
	nextOnEnter: 26, nextOnSkip:26,
	canEnter: (ctx) => (ctx.exit()),
},
26: {
	nextOnEnter: 27, nextOnSkip:27,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " Myra the chant-singer.");
		},
},
27: {
	nextOnEnter: 28, nextOnSkip:28,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " Her face is more animal than human, changed by magic.");
		},
},
28: {
	nextOnEnter: 29, nextOnSkip:34,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();
		display.appendText(e, " (It's disgusting.)");
		},
	canEnter: (ctx) => (ctx.skip()),
	getOptions: () => [28, 32],
},
29: {
	nextOnEnter: 30, nextOnSkip:30,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " She and her cohorts live and die by ancient traditions and artifacts, but the human form seems not among those precious things.");
		},
},
30: {
	nextOnEnter: 31, nextOnSkip:31,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " They're free to contort and ruin themselves for shallow utility and aesthetic, leaving their own species behind.");
		},
},
31: {
	nextOnEnter: 34, nextOnSkip:34,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " Hypocrites. The ugliness of their meddling is the burden they deserve.");
		},
},
32: {
	nextOnEnter: 33, nextOnSkip:34,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();
		display.appendText(e, " (It's beautiful.)");
		},
	canEnter: (ctx) => (ctx.skip()),
},
33: {
	nextOnEnter: 34, nextOnSkip:34,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-narration');
		display.appendText(e, " She's sculpted herself into what she wants to be. Isn't that what we all want?");
		},
},
34: {
	nextOnEnter: 35, nextOnSkip:35,
	canEnter: (ctx) => (ctx.back()),
},
35: {
	nextOnEnter: 36, nextOnSkip:36,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-you");
		display.appendText(e, " “Affrighted?”");
		},
},
36: {
	nextOnEnter: 37, nextOnSkip:37,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " Thou dost refute the charge?");
		},
},
37: {
	nextOnEnter: 38, nextOnSkip:41,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();
		display.appendText(e, " I'm just confused by your phrasing. It's hard to understand what you're saying, at times.");
		},
	getOptions: () => [37, 39],
},
38: {
	nextOnEnter: 41, nextOnSkip:41,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " I understand. We learned from the echos of ");
		display.appendTextOrElement(e, ctx.explore("the ancient songs ", "ancient_songs"));
		display.appendText(e, ". Those deaf to it are force to relearn, again and again, and lose yet more of their memory.");
		},
},
39: {
	nextOnEnter: 40, nextOnSkip:41,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();
		display.appendText(e, " I do.");
		},
},
40: {
	nextOnEnter: 41, nextOnSkip:41,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " Then perhaps thou shouldst walk faster.");
		},
},
41: {
	nextOnEnter: 42, nextOnSkip:42,
	canEnter: (ctx) => (ctx.back()),
},
42: {
	nextOnEnter: 43, nextOnSkip:45,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();
		display.appendText(e, " What are the ancient chants? Who sang them?");
		},
	getOptions: () => [42, 44],
},
43: {
	nextOnEnter: 45, nextOnSkip:45,
	show: (ctx, display) => { //;
		var e = display.addMessage(); e.classList.add('dia-message');
		e.classList.add("speaker-myra");
		display.appendText(e, " ");
		},
},
44: {
	nextOnEnter: 45, nextOnSkip:45,
	show: (ctx, display) => { //;
		var e = display.addReplyButton();
		display.appendText(e, " How do you hear these songs?");
		},
},
45: {
	nextOnEnter: -1, nextOnSkip:-1,
	canEnter: (ctx) => (ctx.back()),
},
}}