function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const text = document.querySelector('.color');

const setGradient = () => {
	body.style.background = `linear-gradient(to right, ${getRandomHexColor()}, ${getRandomHexColor()})`;
	text.innerText = `${body.style.background};`;
};

btn.addEventListener('click', setGradient);
