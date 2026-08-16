
const datxt = DialogView.appendText;
const dach = DialogView.addChild;

function always(ctx) { return true; }

const sequence00 = {
	dc_int_dialog: {
		0: {
			intNext: 1,
			intParent: -1,
			intChild: -1
			addText: (e) => {
				e.classList.add('dia-narration');
				datxt(e, 'This is narration.')
			},
			canEnter: always
		},
		1: {
			intNext: 2,
			intParent: -1,
			intChild: -1,
			addText: (e) => {
				e.classList.add('dia-message');
				datxt(e, 'Hello! This is ');
				dach(e, 'text', 'i');
				datxt(e, '.');
			},
			canEnter: always
		},
		2 : {
			intNext: -1,
			inParent: -1,
			intChild: -1,
			addText: (e) => {
				e.classList.add('dia-message');
				datxt(e, 'This is ');
				dach(e, 'some more', 'b');
				datxt(e, 'text!');
			},
			canEnter: always
		}
	},
	dc_str_labels: {}
};

const sequence01 = {

};