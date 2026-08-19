const name = 'wax_gloves';

import * as DialogView from '/dialog/runtime/display.js';
import {dialog00_intro} from '/compiled/dialog00_intro.js';

var btnPlay = document.getElementById('btn-play');
var btnNext = document.getElementById('btn-next');
var elemMsgList = document.getElementById('messages');
var elemReplyList = document.getElementById('replies');

var display = {
	addMessage: (speaker) => {
		var e = DialogView.addChild(elemMsgList);
		e.classList.add('dia-message');

		if(speaker){
			e.classList.add('speaker-'+speaker);
		}
		return e;
	},
	addNarration: () => {
		var e = DialogView.addChild(elemMsgList);
		e.classList.add('dia-narration');
		return e;
	},
	addReplyButton: () => {
		var r = DialogView.addChild(elemReplyList, '', 'button');
		r.classList.add('button');
		return r;
	},
	addChild: DialogView.addChild,
	appendText: DialogView.appendText,
	appendTextOrElement: DialogView.appendTextOrElement,
};

var seqCurrent;
function diaGet(intId) {
	return seqCurrent.dc_int_dialog[intId];
}

var a_stack = [];
// Dictionary to a list of HTML elements for each topic
var dc_mentioned = {};
var intCurrent = 0;
function reset() {
	intCurrent = 0;
	a_stack = [];
	dc_mentioned = {};
}

var ctx = {
	// Conditions
	forget: (topic) => {
		if(topic in dc_mentioned) {
			var a_elemLinks = dc_mentioned[topic];
			for(var i = 0; i < a_elemLinks.length; i++) {
				var elemLink = a_elemLinks[i];
				elemLink.classList.add('disabled');
			}
			delete dc_mentioned[topic];
			return true;
		}
		else {
			return false;
		}
	},
	scene: (image) => {
		console.log('Setting scene to ', image);
		return true;
	},
	mention: (strTopic) => {
		dc_mentioned[strTopic] = [];
		return true;
	},
	mentioned: (strTopic) => {
		return strTopic in dc_mentioned;
	},
	
	// Effects
	skip: () => "SKIP",
	format: (name) => {return {format: name};},

	// Control flow
	exit: () => -1,
	goto: (strLabel) => {
		if(strLabel in seqCurrent.dc_str_labels) {
			return seqCurrent.dc_str_labels[strLabel];
		}
		else {
			console.error('No such label: ', strLabel);
			return diaGet(intCurrent).nextOnSkip;
		}
	},
	enter: (strLabel) => {
		a_stack.push(intCurrent);
		return ctx.goto(strLabel);
	},
	back: () => {
		var intPrev = a_stack.pop();
		var intNext = diaGet(intPrev).nextOnEnter;
		return intNext;
	},
	// Interpolations
	explore: (strText, strLabel) => {
		if(!strLabel) {
			strLabel = strText;
		}
		ctx.mention(strLabel);
		var link = document.createElement('a');
		dc_mentioned[strLabel].push(link);
		link.href = '#'+strLabel;
		link.innerText = strText;
		link.addEventListener('click', () => {
			// Can't do this now.
			if(btnNext.hidden || !ctx.mentioned(strLabel)) {
				return;
			}
			var target = ctx.enter(strLabel);
			intCurrent = target;
			advance();
		});
		return link;
	}
};

function canEnter(diaItem) {
	if('canEnter' in diaItem) {
		return diaItem.canEnter(ctx);
	}
	return true;
}

function getNext(diaItem) {
	if('getNext' in diaItem) {
		return diaItem.getNext(ctx);
	}
	else {
		return diaItem.nextOnEnter;
	}
}

function getEffects(diaItem) {
	if('runEffects' in diaItem) {
		return diaItem.runEffects(ctx);
	}
	else {
		return [];
	}
}

function addMessage(strText, strClass) {
	var msg = display.addMessage();
	if(strClass) {
		msg.classList.add(strClass);
	}
	DialogView.appendText(msg, strText);
}

function listReplies(diaItem) {
	elemReplyList.innerText = '';
	elemReplyList.hidden = false;
	var intShown = 0;
	var a_intReplies = diaItem.options;
	for(let i = 0; i < a_intReplies.length; i++) {
		var diaReply = diaGet(a_intReplies[i]);
		let next = diaReply.nextOnEnter;
		var r = canEnter(diaReply);
		if(!r) {
			continue;
		}
		let btn = diaReply.show(ctx, display);
		btn.addEventListener('click', () => {
			var a_effects = getEffects(diaReply);
			if(a_effects.indexOf('SKIP') < 0) {
				var msg = display.addMessage('you');
				msg.innerHTML = btn.innerHTML;
			}
			intCurrent = next;
			advance();
		});
		intShown ++;
	}
	return intShown > 0;
}

function advance() {
	elemReplyList.hidden = true;
	var result = false;
	while(!result) {
		var diaItem = diaGet(intCurrent);
		if(!diaItem) {
			break;
		}
		if('options' in diaItem) {
			// Message is done.
			if(listReplies(diaItem)) {
				btnNext.hidden = true;
				return;
			}
			else {
				intCurrent = diaItem.nextOnSkip;
				continue;
			}
		}
		var r = canEnter(diaItem);
		if(!r) {
			intCurrent = diaItem.nextOnSkip;
			continue;
		}
		if(!('show' in diaItem)) {
			intCurrent = getNext(diaItem);
			continue;
		}
		result = true;
	}
	if(intCurrent == -1) {
		addMessage('The End.')
		seqCurrent = null;
	}
	else {
		diaGet(intCurrent).show(ctx, display);
		btnNext.hidden = false;
		elemMsgList.scrollTo(0, elemMsgList.scrollHeight + 100);
	}
}

function start(seqDialog) {
	seqCurrent = seqDialog;
	intCurrent = seqCurrent.intStart;
	reset();
	advance();
	btnPlay.hidden = true;
}

function next() {
	if(intCurrent < 0) {
		return;
	}
	intCurrent = getNext(diaGet(intCurrent));
	advance();
}

document.addEventListener('keydown', () => {
	if(event.key == ' ' && seqCurrent && !btnNext.hidden) {
		next();
	}
});
btnPlay.addEventListener('click', () => start(dialog00_intro));
btnNext.addEventListener('click', next);

export {name};

