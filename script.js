/* eslint-disable no-use-before-define */
var _ = require('lodash');

let testArr = [1, 2, 3, 4]
console.log('testing _without', _.without(testArr, 3));
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const body = document.querySelector('body');
const codeBox = document.querySelector('#codeBox');
const copyButton = document.querySelector('#copyButton');
const dL = document.querySelector('#dL');
const dR = document.querySelector('#dR');
const dB = document.querySelector('#dB');

color1.value = '#ff0000';
color2.value = '#ffff00';

const directionRadio = function () {
  if (dR.checked) {
    return dR.value;
  } if (dL.checked) {
    return dL.value;
  }
  return dB.value;
};

// Just a random comment
console.log(color1.value);

dL.addEventListener('change', changeBG);
dR.addEventListener('change', changeBG);
dB.addEventListener('change', changeBG);
color1.addEventListener('input', changeBG);
color2.addEventListener('input', changeBG);
copyButton.addEventListener('click', copyText);

function copyText() {
  codeBox.select();
  document.execCommand('copy');
}

function changeBG() {
  console.log('Change detected!');
  console.log(`Gradient direction: ${directionRadio()}`);
  body.style.backgroundImage = `linear-gradient(${directionRadio()}, ${color1.value}, ${color2.value})`;
}

codeBox.value = `background-image: linear-gradient(${directionRadio()}, ${color1.value}, ${color2.value})`;
