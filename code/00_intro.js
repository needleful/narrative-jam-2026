import * as Dialog from '/dialog/compiler.js';
import * as DialogView from '/dialog/display.js';

const datxt = DialogView.appendText;
const dach = DialogView.addChild;

const always = (ctx) => true;

const dialog00_intro
 = {
dc_str_labels: {
	"entry": 0,
	"myra_face": 26,
	"affrighted": 35,
	"ancient_songs": 42,
},
0: {
	nextOnEnter: 1, nextOnSkip:1,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " In 1834, the first angel was discovered.");
},
	canEnter: always,
},
1: {
	nextOnEnter: 2, nextOnSkip:2,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " They found it in a cave in the Russian countryside.");
},
	canEnter: always,
},
2: {
	nextOnEnter: 3, nextOnSkip:3,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " Like the others, it had no name.");
},
	canEnter: always,
},
3: {
	nextOnEnter: 4, nextOnSkip:4,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " Like the others, it made an offer.");
},
	canEnter: always,
},
4: {
	nextOnEnter: 5, nextOnSkip:5,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " Enter my pact, and I shall give you my power.");
},
	canEnter: always,
},
5: {
	nextOnEnter: 6, nextOnSkip:6,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " Two thousand five hundred years have passed. The world is different.");
},
	canEnter: always,
},
6: {
	nextOnEnter: 7, nextOnSkip:7,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " The angel is gone. In its place lies immense caverns, unnaturally dark.");
},
	canEnter: always,
},
7: {
	nextOnEnter: 8, nextOnSkip:8,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " They say there's a city in the blackness. They say there are treasures and secret knowledge.");
},
	canEnter: always,
},
8: {
	nextOnEnter: 9, nextOnSkip:9,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " They say the angel is still there, deep in the caves.");
},
	canEnter: always,
},
9: {
	nextOnEnter: 10, nextOnSkip:10,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " Many are going, for many reasons. You are one of them.");
},
	canEnter: always,
},
10: {
	nextOnEnter: 11, nextOnSkip:11,
	addText: null,
	canEnter: (ctx) => (ctx.scene("cave")),
},
11: {
	nextOnEnter: 12, nextOnSkip:12,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " You and your guide tread down what might have been a stairway, centuries ago.");
},
	canEnter: always,
},
12: {
	nextOnEnter: 13, nextOnSkip:13,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " The torches, aided by magic, drip warm Wax across your fingers.");
},
	canEnter: always,
},
13: {
	nextOnEnter: 14, nextOnSkip:14,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " Art thou ");
datxt(e, String(ctx.explore("affrighted")));
datxt(e, "? Thine idle legs shall make the journey slow.");
},
	canEnter: always,
},
14: {
	nextOnEnter: 15, nextOnSkip:18,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " The torches are going dim.");
},
	canEnter: always,
},
15: {
	nextOnEnter: 16, nextOnSkip:17,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " As is their course. The caverns layer darkness upon itself, folding it like a veil.");
},
	canEnter: always,
},
16: {
	nextOnEnter: 17, nextOnSkip:17,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, "Soon they shall scarcely light our feet.");
},
	canEnter: always,
},
17: {
	nextOnEnter: 18, nextOnSkip:18,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " We won't make ");
var _we = document.createElement('i');
e.appendChild(_we); e = _we;
datxt(e, "any");
e = e.parentElement;
datxt(e, " progress if they go out.");
},
	canEnter: always,
},
18: {
	nextOnEnter: 19, nextOnSkip:22,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " The path is narrow.");
},
	canEnter: always,
},
19: {
	nextOnEnter: 20, nextOnSkip:20,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " Better shoes would do thee good.");
},
	canEnter: always,
},
20: {
	nextOnEnter: 21, nextOnSkip:21,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " My shoes are fine. We just need to tread carefully.");
},
	canEnter: always,
},
21: {
	nextOnEnter: 22, nextOnSkip:22,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " They're a bit worn, but ");
},
	canEnter: always,
},
22: {
	nextOnEnter: 23, nextOnSkip:24,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " There could be others ahead.");
},
	canEnter: always,
},
23: {
	nextOnEnter: 24, nextOnSkip:24,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " Aye. There shall be.");
},
	canEnter: always,
},
24: {
	nextOnEnter: 25, nextOnSkip:25,
	addText: null,
	canEnter: (ctx) => (ctx.forget("affrighted")),
},
25: {
	nextOnEnter: 26, nextOnSkip:26,
	addText: null,
	canEnter: (ctx) => (ctx.exit()),
},
26: {
	nextOnEnter: 27, nextOnSkip:27,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " Myra the chant-singer.");
},
	canEnter: always,
},
27: {
	nextOnEnter: 28, nextOnSkip:28,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " Her face is more animal than human, changed by magic.");
},
	canEnter: always,
},
28: {
	nextOnEnter: 29, nextOnSkip:32,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " (It's disgusting.)");
},
	canEnter: (ctx) => (ctx.skip()),
},
29: {
	nextOnEnter: 30, nextOnSkip:30,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " She and her cohorts live and die by ancient traditions and artifacts, but the human form seems not among those precious things.");
},
	canEnter: always,
},
30: {
	nextOnEnter: 31, nextOnSkip:31,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " They're free to contort and ruin themselves for shallow utility and aesthetic, leaving their own species behind.");
},
	canEnter: always,
},
31: {
	nextOnEnter: 32, nextOnSkip:32,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " Hypocrites. The ugliness of their meddling is the burden they deserve.");
},
	canEnter: always,
},
32: {
	nextOnEnter: 33, nextOnSkip:34,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " (It's beautiful.)");
},
	canEnter: (ctx) => (ctx.skip()),
},
33: {
	nextOnEnter: 34, nextOnSkip:34,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " She's sculpted herself into what she wants to be. Isn't that what we all want?");
},
	canEnter: always,
},
34: {
	nextOnEnter: 35, nextOnSkip:35,
	addText: null,
	canEnter: (ctx) => (ctx.back()),
},
35: {
	nextOnEnter: 36, nextOnSkip:36,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " “Affrighted?”");
},
	canEnter: always,
},
36: {
	nextOnEnter: 37, nextOnSkip:37,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " Thou dost refute the charge?");
},
	canEnter: always,
},
37: {
	nextOnEnter: 38, nextOnSkip:39,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " I'm just confused by your phrasing. It's hard to understand what you're saying, at times.");
},
	canEnter: always,
},
38: {
	nextOnEnter: 39, nextOnSkip:39,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " I understand. We learned from the echos of ");
datxt(e, String(ctx.explore("the ancient songs ", "ancient_songs")));
datxt(e, ". Those deaf to it are force to relearn, again and again, and lose yet more of their memory.");
},
	canEnter: always,
},
39: {
	nextOnEnter: 40, nextOnSkip:41,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " I do.");
},
	canEnter: always,
},
40: {
	nextOnEnter: 41, nextOnSkip:41,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " Then perhaps thou shouldst walk faster.");
},
	canEnter: always,
},
41: {
	nextOnEnter: 42, nextOnSkip:42,
	addText: null,
	canEnter: (ctx) => (ctx.back()),
},
42: {
	nextOnEnter: 43, nextOnSkip:44,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " What are the ancient chants? Who sang them?");
},
	canEnter: always,
},
43: {
	nextOnEnter: 44, nextOnSkip:44,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " ");
},
	canEnter: always,
},
44: {
	nextOnEnter: 45, nextOnSkip:45,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " How do you hear these songs?");
},
	canEnter: always,
},
45: {
	nextOnEnter: -1, nextOnSkip:-1,
	addText: null,
	canEnter: (ctx) => (ctx.back()),
},
}