import * as Dialog from '/dialog/compiler.js';
import * as DialogView from '/dialog/display.js';

const name = 'wax_gloves';
const content = document.getElementById('game-content');

const codePreamble = `
import * as Dialog from '/dialog/compiler.js';
import * as DialogView from '/dialog/display.js';

const datxt = DialogView.appendText;
const dach = DialogView.addChild;

const always = (ctx) => true;

`;

async function compile(strPath, out) {
	DialogView.addChild(content, strPath, 'h2');
	const response = await fetch(strPath, {cache: 'no-store'});
	if(!response.ok) {
		DialogView.addChild(content, 'FAILED! Could not load file!');
		return false;
	}
	var strText = await response.text();
	var seqDialog = Dialog.compile(strText.replaceAll('\r', ''));
	var elemJS = document.createElement('pre');
	elemJS.innerText = codePreamble + Dialog.toJS(seqDialog, 'const '+ out);
	content.appendChild(elemJS);
}

function buildGame() {
	compile('/build/00_intro.dialog', 'dialog00_intro');
}

var btnCompile = document.getElementById('btn-compile');
if(btnCompile) {
	btnCompile.addEventListener('click', buildGame);	
} 

export {name};

