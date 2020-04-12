export function closeInfoPopUp() {
  hideInfoPopUp();
  removeBlurFromBackground(); 
}

function hideInfoPopUp() {
  const infoPopUp = document.querySelector('.component-info-pop-up');
  infoPopUp.classList.add('hidden');
}

function removeBlurFromBackground() {
  const blurSidebar = document.querySelector('.sidebar');
  blurSidebar.classList.remove('blur');
  const blurVisualiser = document.querySelector('.visualiser');
  blurVisualiser.classList.remove('blur');
}
