//your code here
// get DOM elements
const input = document.getElementById('input');
const block0 = document.getElementById('block0');
const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');
const block4 = document.getElementById('block4');
const block5 = document.getElementById('block5');
const block6 = document.getElementById('block6');
const block7 = document.getElementById('block7');
const block8 = document.getElementById('block8');
const block9 = document.getElementById('block9');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const dot = document.getElementById('dot');
const ans = document.getElementById('ans');
const clr = document.getElementById('clr');

// add event listeners to number buttons
block0.addEventListener('click', function() {
  input.value += '0';
});

block1.addEventListener('click', function() {
  input.value += '1';
});

block2.addEventListener('click', function() {
 
