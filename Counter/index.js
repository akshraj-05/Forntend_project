let count = 0;
for (let i = 0; i < 3; i++) {
    document.getElementsByClassName("count")[i].onclick = function () {
        Make_change(this.innerHTML)
    }
}

document.addEventListener("keypress", function (event) {
    Make_change(event.key)
})
function Make_change(word) {
    switch (word) {
        case "+":
            count++;
            break;
        case "-":
            count--;
            break;

        default:
            count = 0
            break;
    }
    document.querySelector("span").innerHTML = count;
}