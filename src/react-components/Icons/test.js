const TextToSVG = require('text-to-svg');
const textToSVG = TextToSVG.loadSync();

const tex = TextToSVG.loadSync('./bahasa.ttf');
const options = {x: 0, y: 0, fontSize: 180, anchor: 'top'};
const svg = tex.getSVG('SubAqua Galicia',options);

console.log(svg);