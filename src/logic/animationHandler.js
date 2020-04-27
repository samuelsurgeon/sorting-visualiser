import { runAnimations, clearAnimations } from './runSortAnimation';

export default function handleAnimations(state) {
  if (!state.animationRunning) {
    runAnimations(state.selectedAlgorithm, state.array, state.animationSpeed);
    return { animationRunning: false };
  } else {
    clearAnimations(state.array.length, state.animationSpeed);
    return { animationRunning: false };
    //generateArray();
  }
  //return { animationRunning: !state.animationRunning };
  //return state.animationRunning = !state.animationRunning;
}
