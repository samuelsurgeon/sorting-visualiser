export default function animationHandler(animationRunning, selectedAlgorithm, array, animationSpeed) {
  if (animationRunning) {
    runAnimations(selectedAlgorithm, array, animationSpeed);
  } else {
    clearAnimations(array.length, animationSpeed);
  }
}
