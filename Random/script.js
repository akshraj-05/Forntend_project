let bg = document.getElementsByTagName("body");
let btn = document.getElementsByClassName("bubble");
let bubbles = document.getElementsByClassName("bubbl");

btn[0].addEventListener("click", function () {
    change();
});
document.addEventListener("keydown", function (e) {
    change();
});

let buttonEnabled = true;

let currentSong = null;

function change() {
    bg[0].style.backgroundColor = getRandomColor();
    btn[0].style.backgroundColor = getRandomColor();
    btn[0].style.color = "white";

    if (buttonEnabled) {
        if (currentSong !== null) {
            currentSong.pause();
        }
        var songList = ["./audio/b.m4a", "./audio/a.m4a", "./audio/c.m4a", "./audio/d.mp3", "./audio/e.mp3", "./audio/1.mp3", "./audio/2.mp3", "./audio/3.mp3", "./audio/4.mp3", "./audio/5.mp3", "./audio/6.mp3"];
        var randomIndex = Math.floor(Math.random() * songList.length);
        currentSong = new Audio(songList[randomIndex]);
        currentSong.play();
        buttonEnabled = false;
        //  contentChange(songList[randomIndex].slice(8, -4));
        setTimeout(function () {
            buttonEnabled = true;
        }, 20000);
    }
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// function contentChange(tex) {
//     for (let index = 0; index < bubbles.length; index++) {
//         bubbles[index].style.setProperty('content', tex,"important");
//         console.log(bubbles[index].style.getPropertyValue('content'));
//     }
// }



