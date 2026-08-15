import * as Dialog from './dialog/compiler.js';
import * as DialogView from './dialog/display.js';

const name = 'wax_gloves';
const content = document.getElementById('game-content');

async function test(strPath) {
	DialogView.addChild(content, strPath, 'h2');
	const response = await fetch(strPath, {cache: 'no-store'});
	if(!response.ok) {
		DialogView.addChild(content, 'FAILED! Could not load file!');
		return false;
	}
	var strText = await response.text();
	var seqDialog = Dialog.compile(strText.replaceAll('\r', ''));
	DialogView.displayDebug(content, seqDialog);
}

test('./content/00_intro.dialog');

export {name};

