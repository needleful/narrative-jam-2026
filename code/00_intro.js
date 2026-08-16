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
	intNext: 1, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " In 1834, the first angel was discovered.");
},
	canEnter: always,
},
1: {
	intNext: 2, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " They found it in a cave in the Russian countryside.");
},
	canEnter: always,
},
2: {
	intNext: 3, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " Like the others, it had no name.");
},
	canEnter: always,
},
3: {
	intNext: 4, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " Like the others, it made an offer.");
},
	canEnter: always,
},
4: {
	intNext: 5, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " Enter my pact, and I shall give you my power.");
},
	canEnter: always,
},
5: {
	intNext: 6, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " Two thousand five hundred years have passed. The world is different.");
},
	canEnter: always,
},
6: {
	intNext: 7, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " The angel is gone. In its place lies immense caverns, unnaturally dark.");
},
	canEnter: always,
},
7: {
	intNext: 8, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " They say there's a city in the blackness. They say there are treasures and secret knowledge.");
},
	canEnter: always,
},
8: {
	intNext: 9, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " They say the angel is still there, deep in the caves.");
},
	canEnter: always,
},
9: {
	intNext: 10, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " Many are going, for many reasons. You are one of them.");
},
	canEnter: always,
},
10: {
	intNext: 11, intChild:-1, intParent:-1,
	addText: null,
	canEnter: (ctx) => (ctx.scene("cave")),
},
11: {
	intNext: 12, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " You and your guide tread down what might have been a stairway, centuries ago.");
},
	canEnter: always,
},
12: {
	intNext: 13, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " The torches, aided by magic, drip warm Wax across your fingers.");
},
	canEnter: always,
},
13: {
	intNext: 14, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " Art thou ");
datxt(e, String(ctx.explore("affrighted")));
datxt(e, "? Thine idle legs shall make the journey slow.");
},
	canEnter: always,
},
14: {
	intNext: 18, intChild:15, intParent:-1,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " The torches are going dim.");
},
	canEnter: always,
},
15: {
	intNext: 17, intChild:16, intParent:14,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " As is their course. The caverns layer darkness upon itself, folding it like a veil.");
},
	canEnter: always,
},
16: {
	intNext: -1, intChild:-1, intParent:15,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, "Soon they shall scarcely light our feet.");
},
	canEnter: always,
},
17: {
	intNext: -1, intChild:-1, intParent:14,
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
	intNext: 22, intChild:19, intParent:-1,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " The path is narrow.");
},
	canEnter: always,
},
19: {
	intNext: 20, intChild:-1, intParent:18,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " Better shoes would do thee good.");
},
	canEnter: always,
},
20: {
	intNext: 21, intChild:-1, intParent:18,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " My shoes are fine. We just need to tread carefully.");
},
	canEnter: always,
},
21: {
	intNext: -1, intChild:-1, intParent:18,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " They're a bit worn, but ");
},
	canEnter: always,
},
22: {
	intNext: 24, intChild:23, intParent:-1,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " There could be others ahead.");
},
	canEnter: always,
},
23: {
	intNext: -1, intChild:-1, intParent:22,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " Aye. There shall be.");
},
	canEnter: always,
},
24: {
	intNext: 25, intChild:-1, intParent:-1,
	addText: null,
	canEnter: (ctx) => (ctx.forget("affrighted")),
},
25: {
	intNext: 26, intChild:-1, intParent:-1,
	addText: null,
	canEnter: (ctx) => (ctx.exit()),
},
26: {
	intNext: 27, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " Myra the chant-singer.");
},
	canEnter: always,
},
27: {
	intNext: 28, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " Her face is more animal than human, changed by magic.");
},
	canEnter: always,
},
28: {
	intNext: 32, intChild:29, intParent:-1,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " (It's disgusting.)");
},
	canEnter: (ctx) => (ctx.skip()),
},
29: {
	intNext: 30, intChild:-1, intParent:28,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " She and her cohorts live and die by ancient traditions and artifacts, but the human form seems not among those precious things.");
},
	canEnter: always,
},
30: {
	intNext: 31, intChild:-1, intParent:28,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " They're free to contort and ruin themselves for shallow utility and aesthetic, leaving their own species behind.");
},
	canEnter: always,
},
31: {
	intNext: -1, intChild:-1, intParent:28,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " Hypocrites. The ugliness of their meddling is the burden they deserve.");
},
	canEnter: always,
},
32: {
	intNext: 34, intChild:33, intParent:-1,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " (It's beautiful.)");
},
	canEnter: (ctx) => (ctx.skip()),
},
33: {
	intNext: -1, intChild:-1, intParent:32,
	addText: (e) => { e.classList.add('dia-narration');
datxt(e, " She's sculpted herself into what she wants to be. Isn't that what we all want?");
},
	canEnter: always,
},
34: {
	intNext: 35, intChild:-1, intParent:-1,
	addText: null,
	canEnter: (ctx) => (ctx.back()),
},
35: {
	intNext: 36, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " “Affrighted?”");
},
	canEnter: always,
},
36: {
	intNext: 37, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " Thou dost refute the charge?");
},
	canEnter: always,
},
37: {
	intNext: 39, intChild:38, intParent:-1,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " I'm just confused by your phrasing. It's hard to understand what you're saying, at times.");
},
	canEnter: always,
},
38: {
	intNext: -1, intChild:-1, intParent:37,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " I understand. We learned from the echos of ");
datxt(e, String(ctx.explore("the ancient songs ", "ancient_songs")));
datxt(e, ". Those deaf to it are force to relearn, again and again, and lose yet more of their memory.");
},
	canEnter: always,
},
39: {
	intNext: 41, intChild:40, intParent:-1,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " I do.");
},
	canEnter: always,
},
40: {
	intNext: -1, intChild:-1, intParent:39,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " Then perhaps thou shouldst walk faster.");
},
	canEnter: always,
},
41: {
	intNext: 42, intChild:-1, intParent:-1,
	addText: null,
	canEnter: (ctx) => (ctx.back()),
},
42: {
	intNext: 44, intChild:43, intParent:-1,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " What are the ancient chants? Who sang them?");
},
	canEnter: always,
},
43: {
	intNext: -1, intChild:-1, intParent:42,
	addText: (e) => { e.classList.add('dia-message');
datxt(e, " ");
},
	canEnter: always,
},
44: {
	intNext: 45, intChild:-1, intParent:-1,
	addText: (e) => { e.classList.add('dia-option');
datxt(e, " How do you hear these songs?");
},
	canEnter: always,
},
45: {
	intNext: -1, intChild:-1, intParent:-1,
	addText: null,
	canEnter: (ctx) => (ctx.back()),
},
}