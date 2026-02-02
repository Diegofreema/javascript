const pTag = document.getElementById('demo');
pTag.innerHTML = 20999;
pTag.style.color = 'blue';
pTag.style.fontSize = '50px';

const lightBulb = document.getElementById('lightBulb');
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
turnOn.addEventListener('click', () => {
  lightBulb.src = './images/pic_bulbon.gif';
});

turnOff.addEventListener('click', () => {
  lightBulb.src = './images/pic_bulboff.gif';
});

showBtn.addEventListener('click', () => {
  lightBulb.style.display = 'block';
});

hideBtn.addEventListener('click', () => {
  lightBulb.style.display = 'none';
});
