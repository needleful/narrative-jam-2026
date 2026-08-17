import * as Dialog from '/dialog/compiler.js';
import * as DialogView from '/dialog/display.js';

const name = 'wax_gloves_build';
const content = document.getElementById('game-content');
const download = document.getElementById('link-download');

const codePreamble = '//AUTOMATICALLY GENERATED\n';

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
	var strCode = codePreamble + `export const name = "${out}";\n` + Dialog.toJS(seqDialog, 'export const '+ out)
	elemJS.innerText = strCode;
	content.appendChild(elemJS);
	return strCode;
}

async function buildGame() {
	var strCode = await compile('/build/00_intro.dialog', 'dialog00_intro');
	var blobCode = new Blob([strCode], {type: 'text/plain'});
	if(window.navigator.msSaveOrOpenBlob) {
		window.navigator.msSaveBlob(blob, filename);
	}
	else {
		const elem = window.document.createElement('a');
		elem.href = URL.createObjectURL(blobCode);
		elem.download = '00_intro.js';
		document.body.appendChild(elem);
		elem.click();
		document.body.removeChild(elem);
	}
}

var btnCompile = document.getElementById('btn-compile');
btnCompile.addEventListener('click', buildGame);

export {name};

