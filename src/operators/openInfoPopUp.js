
export function openInfoPopUp() {
  revealInfoPopUp();
  addBlurToBackground(); 
}

function revealInfoPopUp() {
  const infoPopUp = document.querySelector('.component-info-pop-up');
  infoPopUp.classList.remove('hidden');
}

function addBlurToBackground() {
  const blurSidebar = document.querySelector('.sidebar');
  blurSidebar.classList.add('blur');
  const blurVisualiser = document.querySelector('.visualiser');
  blurVisualiser.classList.add('blur');
}
