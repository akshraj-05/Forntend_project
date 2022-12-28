let count = document.querySelector("span");
let change = document.getElementsByClassName("count");
let c = 0;
for (let i = 0; i < 3; i++) {
    change[i].onclick = function () {
        if (i == 0) {
            c++;
        } if (i == 1) {
            c--;
        } if (i == 2) {
            c = 0;
        }
        count.innerHTML = c;
    }
}