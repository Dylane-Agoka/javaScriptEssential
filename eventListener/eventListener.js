const button = document.getElementById('myButton');
const moveArea = document.getElementById('moveArea');
const keyInput = document.getElementById('keyInput');
const focusTextInput = document.getElementById('focusTextInput');

// 1. Click event
button.addEventListener('click', () => {
  const name = prompt('What is your full name?');
  document.getElementById('output').textContent = `Welcome ${name}`;
});

// 2. mouse events : mouseout, mousemove, mouseenter, mouseleave, mouseover
moveArea.addEventListener('mouseenter', function(event) {
  console.log(`Mouse coordiantes - X: ${event.clientX}, Y: ${event.clientY}`);
});

// 3. Keyboard events : encompass 'keydown' (press), 'keyup' (release), and 'keypress' (press and hold).
keyInput.addEventListener('keydown', function() {
  console.log('Key pressed down!');
});
keyInput.addEventListener('keyup', function() {
  console.log('Key released!');
});
keyInput.addEventListener('keypress', function() {
  console.log('Key press and hold : keypress!');
});

// 4. Submit events
document.getElementById('myForm').addEventListener('submit', function(event){
  event.preventDefault(); // Prevents the default form submission behavior
  console.log('Form submitted!');
});

// 5. Focus events
focusTextInput.addEventListener('focus', function() {
  console.log('Input focused');
});

focusTextInput.addEventListener('blur', function() {
  console.log('Input blurred');
});

// 6. Window events
window.addEventListener('load', () => {
  console.log('Page and all resources loaded');
});

window.addEventListener('resize', () => {
  console.log('Window resized');
});

window.addEventListener('scroll', function() {
  console.log('Document scrolled');
})
