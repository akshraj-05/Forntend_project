//! adding event lisner to the onclick

let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", function () {
        console.log(this.innerHTML);
        calculate(this.innerHTML)
    })
})

// adding event lisner to the keypress buttons

document.addEventListener("keydown", function (event) {
    isNumber(event.key) && calculate(event.key);
});

//* calculation begin here
let string = "";
function calculate(word) {
    switch (word) {
        case "c":
        case "C":
            {
                string = ""
                document.querySelector('#calc-typed').innerHTML = "Calculate";
                break;
            }
        case "=":
        case "Enter":
            {
                string = eval(string);
                document.querySelector('#calc-typed').innerHTML = string;
                break;
            }
        case "Backspace":
        case "⌫":
            {
                string = string.slice(0, -1);
                if(string.length==0){
                    document.querySelector('#calc-typed').innerHTML = "Calculate";
                }else{
                document.querySelector('#calc-typed').innerHTML = string;
                }

                break;

            }


        default:
            {
                string = string + word;
                document.querySelector('#calc-typed').innerHTML = string;
                break;
            }
    }
}

function isNumber(e) {
    if (e >= "0" && e <= "9") {
        return true;
    }
    if (e == "c" || e == "=" || e == "+" || e == "-" || e == "*" || e == "/" || e == "%" || e == "Enter" || e == "Backspace"||e==".") {
        return true;
    }
    return false;
}