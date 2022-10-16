const btn = document.querySelector('button');
const containerBg = document.querySelector('.container-bg');

const colors = ['red', 'blue', 'yellow', 'orange', 'pink', 'purple'];

containerBg.style.backgroundColor = 'violet';

btn.addEventListener('click', bgSpectrum);

function bgSpectrum() {
  const colorIndex = parseInt(Math.random()*colors.lentgth);
  containerBg.style.backgroundColor = colors[colorIndex];
}
