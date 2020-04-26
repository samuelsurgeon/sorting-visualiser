import { runAnimations, clearAnimations } from './runSortAnimation';

export default function handleAnimations(animationRunning, selectedAlgorithm, array, animationSpeed, generateArray) {
  if (!animationRunning) {
    runAnimations(selectedAlgorithm, array, animationSpeed);
  } else {
    clearAnimations(array.length, animationSpeed);
    generateArray();
  }
  return animationRunning = !animationRunning;
}
