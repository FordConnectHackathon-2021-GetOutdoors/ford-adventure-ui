const lightShadow = "rgba(0, 0, 0, 0.1)";
const lightHighlight = "rgba(255,255,255, 1)";
const lightBottom = `0 .5rem 1rem 0 ${lightShadow}`;
const lightTop = `0 -.25rem 1rem .5rem ${lightHighlight}`;

const lightInnerShadow = "inset 0 .125rem .25rem 0 rgba(0,0,0,.15)";
const lightInnerHighlight = "inset 0 -.125rem .05rem 0 rgba(255,255,255,.5)";

const darkHighlight = "rgba(255, 255, 255, .075)";
const darkShadow = "rgba(0, 0, 0, .5)";
const darkBottom = `0 .5rem 1.25rem 0 ${darkShadow}`;
const darkTop = `0 -.25rem 1rem .25rem ${darkHighlight}`;

const darkInnerShadow = "inset 0 .125rem .05rem 0 rgba(0,0,0,.25)";
const darkInnerHighlight = "inset 0 -.125rem .25rem 0 rgba(255,255,255,.075)";

const shadows = {
  lightSearchShadow: `${lightBottom}, ${lightTop}, ${lightInnerShadow}, ${lightInnerHighlight}`,
  darkSearchShadow: `${darkBottom}, ${darkTop}, ${darkInnerShadow}, ${darkInnerHighlight}`,
};

export default shadows;
