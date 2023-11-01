const result = document.getElementById('result');
const buttons = document.querySelectorAll('input[type="button"]');
let inputValue = result.value;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.value;

    if (buttonValue === "=") {
      try {
        result.value = eval(inputValue);
      } catch (error) {
        result.value = "Errore";
      }
    } else if (buttonValue === "C" || buttonValue === "CE") {
      result.value = "";
      inputValue = "";
    } else if (buttonValue === "Del") {
      result.value = inputValue = inputValue.slice(0, -1);
    } else {
      result.value += buttonValue;
      inputValue += buttonValue.replace(/÷/g, '/');
    }
  });
});


