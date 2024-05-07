const screen = document.getElementById('screen');
const btnClean = document.getElementById('btnClean');

function inputKey(input) {
   screen.value += input;
}

function calculate() {
   try {
      screen.value = eval(screen.value);
   } catch (error) {
      screen.value = 'Error';
   }
}

function clear() {
   screen.value = '';
}

btnClean.addEventListener('click', clear);
