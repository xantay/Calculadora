let input = document.getElementById('inputBoX');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.map(button => {
    button.addEventListener('click', event => {
        const innerHTML = event.target.innerHTML;

        switch (innerHTML) {
            case '=':
                if (string == 0) break;

                const calcResult = new Function("return " + string)()
                string = String(calcResult);
                input.value = string;
                break;
            case 'AC':
                string = "";
                input.value = string;
                break;
            case 'DEL':
                string = string.substring(0, string.length-1)
                input.value = string;
                break;
            default:
                string += innerHTML;
                input.value = string;
                break;
        }
    })
})