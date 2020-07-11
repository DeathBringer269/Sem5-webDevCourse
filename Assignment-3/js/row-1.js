var images = ["https://preview.redd.it/13p96y7g7xn41.jpg?width=640&crop=smart&auto=webp&s=fb07209ee0d6b6b05b3f36fbffde27cfd7924433", "https://preview.redd.it/vecyhqfxxkg31.png?width=640&crop=smart&auto=webp&s=b8fdf2a751ddf40a0124ecc79bf267324f7be3c6", "https://preview.redd.it/h6f70szyude31.png?width=640&crop=smart&auto=webp&s=1c6b56f21bda0205ecc4d9061cdd488e50b44df5", "https://preview.redd.it/m23bwh4n0x151.png?width=640&crop=smart&auto=webp&s=bb46c7e120ffea715127547e156abd54a3d11457", "https://preview.redd.it/m23bwh4n0x151.png?width=640&crop=smart&auto=webp&s=bb46c7e120ffea715127547e156abd54a3d11457", "https://preview.redd.it/8pocfvlajwg41.jpg?width=640&crop=smart&auto=webp&s=81e0c7e3db97663efae9a5856f92ef683e3cd31d", "https://preview.redd.it/8pocfvlajwg41.jpg?width=640&crop=smart&auto=webp&s=81e0c7e3db97663efae9a5856f92ef683e3cd31d", "https://preview.redd.it/pri7mesiu9751.png?width=640&crop=smart&auto=webp&s=32a628d7fa50fd29cc55bb3f3be040fc9ce7bfd4", "https://preview.redd.it/klttow3qk2e41.jpg?width=640&crop=smart&auto=webp&s=d89e37617061ab3d777f2e180b4eb31f9a83e09f", "https://preview.redd.it/m90bb95n3m651.jpg?width=640&crop=smart&auto=webp&s=1680ed3caf179cbeb732190744fb2b03782e76d9"]
var imageElement = document.getElementById("carousel").getElementsByTagName("img")[0];
var intervalDisplay = document.getElementById("intervalDisplay");
intervalDisplay.innerHTML = "2000ms";
var index = -1;
var interval = 2000;
var pause = false;
slideShow();

// input field
var secondsInput = document.getElementById("secondsInput");

secondsInput.onchange = function controlInterval() {
    var input = secondsInput.value;
    interval = input;
    intervalDisplay.innerHTML = input + "ms"
}

var controlStateButton = document.getElementById("state");

function controlState() {
    pause = !pause;
    if (pause) {
        controlStateButton.innerHTML = "Play";
    } else {
        slideShow();
        controlStateButton.innerHTML = "Pause";
    }
}

function reset() {
    index = 0;
    imageElement.src = images[index];
}

function slideShow() {
    index = (index + 1) % images.length;
    imageElement.src = images[index];
    if (!pause) {
        setTimeout(slideShow, interval);
    } else {
        clearTimeout();
    }
}