document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
    const display = document.getElementById('display');
  
    buttons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        const value = e.target.getAttribute('data-num');
        const op = e.target.getAttribute('data-op');
        const func = e.target.getAttribute('data-func');
  
        if (value) {
          display.value += value;
        } else if (op) {
          display.value += ' ' + op + ' ';
        } else if (func) {
          if (func === 'clear') {
            display.value = '';
          } else if (func === 'calc') {
            display.value = eval(display.value);
          }
        }
      });
    });
  });
  
