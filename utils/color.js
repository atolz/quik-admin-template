export function getTextColorByBackground(bgColor) {
  const rgbRegex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
  const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

  // Determine the luminance of the background color using the relative luminance formula
  // https://www.w3.org/WAI/GL/wiki/Relative_luminance
  let r, g, b;
  if (bgColor.match(rgbRegex)) {
    [r, g, b] = bgColor.match(rgbRegex).slice(1).map(Number);
  } else if (bgColor.match(hexRegex)) {
    [r, g, b] = bgColor
      .match(hexRegex)
      .slice(1)
      .map((x) => parseInt(x, 16));
  } else {
    return null; // Return null if the background color is invalid
  }
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  // Return the text color based on the background luminance
  return luminance > 0.5 ? "black" : "white";
}
