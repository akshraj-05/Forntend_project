let count = document.querySelector("h1");
let inc = document.getElementsByClassName("inc")[0];
let dec = document.querySelector(".dec");
let rs = document.querySelector(".reset");

let i = 0;
inc.onclick= function () {
    i++;
    count.innerHTML = i;
    if (i == 0) {
        count.style.color = "blue";
    } else if (i < 0) {
        count.style.color = "red";
    } else {
        count.style.color = "green";
    }


}
dec.addEventListener("click", function () {
    i--;
    count.textContent = i;
    if (i == 0) {
        count.style.color = "blue";
    } else if (i < 0) {
        count.style.color = "red";

    } else {
        count.style.color = "green";
    }

})
rs.addEventListener("click", function () {
    i = 0;
    count.textContent = i;
    count.style.color = "blue";
})