export default function clearAnimations(arrayLength, animationsSpeed) {
  let timeoutIDs = arrayLength * animationsSpeed;
  while (timeoutIDs--) {
    window.clearTimeout(timeoutIDs);
  }
}
