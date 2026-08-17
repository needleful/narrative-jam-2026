const name = 'wax_gloves';

import * as DialogView from '/dialog/display.js';
import {dialog00_intro} from '/compiled/00_intro.js';

var btnPlay = document.getElementById('btn-play');
var btnNext = document.getElementById('btn-next');
var elemMsgList = document.getElementById('messages');
var elemReplyList = document.getElementById('messages');

var display = {
	addMessage: () => DialogView.addChild(elemMsgList),
	addReplyButton: () => DialogView.addChild(elemReplyList, '', 'button'),
	addChild: DialogView.addChild,
	appendText: DialogView.appendText,
	appendTextOrElement: DialogView.appendTextOrElement,
};

var seqCurrent;
function diaGet(intId) {
	return seqCurrent.dc_int_dialog[intId];
}

var intCurrent = 0;
function reset() {
	intCurrent = 0;
}

var ctx = {
	exit: () => {
		console.log('Exiting...')
		return true;
	},
	forget: (topic) => {
		console.log('forgetting', topic);
		return true;
	},
	skip: () => true,
	back: () => true,
	scene: (image) => {
		console.log('Setting scene to ', image);
		return true;
	},
	explore(strText, labelTopic) {
		if(!labelTopic) {
			labelTopic = strText;
		}
		var link = document.createElement('a');
		link.href = '#'+labelTopic;
		link.innerText = strText;
		return link;
	}
};

function advance() {
	var result = false;
	while(!result) {
		var diaItem = diaGet(intCurrent);
		if('canEnter' in diaItem) {
			var r = diaItem.canEnter(ctx);
			if(!r) {
				intCurrent = diaItem.nextOnSkip;
				continue;
			}
		}
		if(!('show' in diaItem)) {
			intCurrent = diaItem.nextOnEnter;
			continue;
		}
		result = true;
	}
	if(intCurrent == -1) {
		var msg = display.addMessage();
		DisplayView.appendText(msg, 'Dialog Ended.');
		seqCurrent = null;
	}
	else {
		diaGet(intCurrent).show(ctx, display);
		btnNext.hidden = false;
	}
}

function start(seqDialog) {
	seqCurrent = seqDialog;
	reset();
	advance();
	btnPlay.hidden = true;
}

function next() {
	intCurrent = diaGet(intCurrent).nextOnEnter;
	advance();
}

document.addEventListener('keypress', () => {
	if(event.key == ' ' && seqCurrent) {
		next();
	}
});
btnPlay.addEventListener('click', () => start(dialog00_intro));
btnNext.addEventListener('click', next);

export {name};

