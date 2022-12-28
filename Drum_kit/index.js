

let touch = document.getElementsByTagName("button");
for (let i = 0; i < touch.length; i++) {
    touch[i].addEventListener("click", function () {
        let word = this.innerHTML;
        sound(word);
        animation(word);
    })
}

document.addEventListener("keypress", function (event) {
    sound(event.key);
    animation(event.key);
});


function sound(word) {

    switch (word) {
        case "w": {
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        }
        case "a": {
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        }
        case "s": {
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        }
        case "d": {
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        }
        case "j": {
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        }
        case "k": {
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        }
        case "l": {
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        }
        default: {

        }
    }

}


function animation(word) {
    var pressedButton = document.querySelector("." + word);
    pressedButton.classList.add("pressed");

    setTimeout(function () {
        pressedButton.classList.remove("pressed");
    }, 100);
}