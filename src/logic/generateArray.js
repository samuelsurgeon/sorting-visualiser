export default function generateArray() {
  const PRIMARY_COLOUR = '#00000033';
  const NUMBER_OF_ARRAY_BARS = 14;
  const ARRAY_BAR_MIN_HEIGHT = window.screen.height / 12;
  const ARRAY_BAR_MAX_HEIGHT = window.screen.height / 2;
  const arrayBars = document.querySelectorAll('.array-bar');
  const max = arrayBars.length;
  for (let i = 0; i < max; i += 1) {
    arrayBars[i].style.backgroundColor = PRIMARY_COLOUR;
  }
  const unsortedArray = [];
  for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i += 1) {
    unsortedArray.push(randomIntFromInterval(ARRAY_BAR_MIN_HEIGHT, ARRAY_BAR_MAX_HEIGHT));
  }
  return unsortedArray;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
