let dialog = document.createElement('DIALOG')
let body = document.body;

body.appendChild(dialog);
// body.appendChild();

dialog.setAttribute('open', false)
// dialog.open = true/false

dialog.close()
dialog.showModal() // 