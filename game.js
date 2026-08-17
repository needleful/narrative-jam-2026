const name = 'wax_gloves';

import * as DialogView from '/dialog/display.js';
import {dialog00_intro} from '/compiled/dialog00_intro.js';

var btnPlay = document.getElementById('btn-play');
var btnNext = document.getElementById('btn-next');
var elemMsgList = document.getElementById('messages');
var elemReplyList = document.getElementById('replies');

var display = {
	addMessage: () => DialogView.addChild(elemMsgList),
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
	exit: () => {
		return {goto: -1};
	},
	forget: (topic) => {
		if(topic in dc_mentioned) {
			var a_elemLinks = dc_mentioned[topic];
			for(var i = 0; i < a_elemLinks.length; i++) {
				var elemLink = a_elemLinks[i];
				elemLink.classList.add('disabled');
			}
			delete context[topic];
			return true;
		}
		else {
			return false;
		}
	},
	skip: () => {return {skip: true}},
	goto: (strLabel) => {
		if(strLabel in seqCurrent.dc_str_labels) {
			var intNext = seqCurrent.dc_str_labels[strLabel];
			return {goto: intNext};
		}
		else {
			console.error('No such label: ', strLabel);
			return false;
		}
	},
	enter: (strLabel) => {
		a_stack.push(intCurrent);
		return ctx.goto(strLabel);
	},
	back: () => {
		var intPrev = a_stack.pop();
		var intNext = diaGet(intPrev).nextOnEnter;
		return {goto: intNext};
	},
	scene: (image) => {
		console.log('Setting scene to ', image);
		return true;
	},
	explore: (strText, strLabel) => {
		if(!strLabel) {
			strLabel = strText;
		}
		ctx.mention(strLabel);
		var link = document.createElement('a');
		context[strLabel].push(link);
		link.href = '#'+strLabel;
		link.innerText = strText;
		link.addEventListener('click', () => {
			// Can't do this now.
			if(btnNext.hidden || !ctx.mentioned(strLabel)) {
				return;
			}
			var r = ctx.enter(strLabel);
			intCurrent = r.goto;
			advance();
		});
		return link;
	},
	mention: (strTopic) => {
		dc_mentioned[strTopic] = [];
		return true;
	},
	mentioned: (strTopic) => {
		return strTopic in dc_mentioned;
	}
};

function canEnter(diaItem) {
	if('canEnter' in diaItem) {
		return diaItem.canEnter(ctx);
	}
	return true;
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
	var a_intReplies = diaItem.getOptions();
	for(let i = 0; i < a_intReplies.length; i++) {
		var diaReply = diaGet(a_intReplies[i]);
		let next = diaReply.nextOnEnter;
		var r = canEnter(diaReply);
		if(!r) {
			continue;
		}
		let skip = false;
		if(typeof(r) === 'object') {
			if('skip' in r) {
				skip = r.skip;
			}
		}
		let btn = diaReply.show(ctx, display);
		btn.addEventListener('click', () => {
			if(!skip) {
				var msg = display.addMessage();
				msg.classList.add('speaker-you');
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
		if('getOptions' in diaItem) {
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
		else if(typeof(r) == 'object') {
			if('goto' in r) {
				intCurrent = r.goto;
			}
			continue;
		}
		if(!('show' in diaItem)) {
			intCurrent = diaItem.nextOnEnter;
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
	intCurrent = diaGet(intCurrent).nextOnEnter;
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

