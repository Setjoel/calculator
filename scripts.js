let result = 0;
let display = "";

let input = document.querySelector("#input");
const output = document.querySelector("#output");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', () => {

        let operator = "";

        if (button.textContent == '+' || button.textContent == '-' ||
            button.textContent == '*' || button.textContent == '/') {
            if (result > 0) {
                display = result;
                input.setAttribute('value', display);

            }
            operator = button.textContent;
            display += operator;
            input.setAttribute('value', display);
        }
        else {

            display += button.textContent;
            input.setAttribute('value', display);
        }

        if (button.textContent == '=') {
            display = display.substr(0, display.length - 1);
            input.setAttribute('value', display);
            result = eval(input.getAttribute('value').toString());
            output.textContent = result;
        }

        if (button.textContent == 'AC') {
            display = "";
            result = 0;
            input.setAttribute('value', display);
            output.textContent = result;
        }

    });

});
