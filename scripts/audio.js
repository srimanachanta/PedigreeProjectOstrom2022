function playAudio() {
    var sound = new Audio("./audio/yodle.m4a");

    if(sound.currentTime > 0) {
        sound.currentTime = 0;
    } else {
        sound.play();
    }
}