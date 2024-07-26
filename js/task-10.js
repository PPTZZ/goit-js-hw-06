function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const desytoryBtn = document.querySelector('button[data-destroy]');
const container = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
	for (let i = 0; i < input.value; i++) {
		const box = `<div style="height:30px;width:30px;background:${getRandomHexColor()}"></div>`;
		container.insertAdjacentHTML('beforeend', box);
	}
});

desytoryBtn.addEventListener('click', () => {
  container.replaceChildren();
});
