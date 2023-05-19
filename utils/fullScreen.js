export function openFullscreen(elem) {
  if (!(elem instanceof HTMLElement)) {
    console.log("no element passed in, html element needed. Got this instead", elem);
    return;
  }
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  //   Check if elem is in full
  if (!document.fullscreenElement) {
    return;
  }
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

const fullScreen = { openFullscreen, closeFullscreen };

export default fullScreen;
