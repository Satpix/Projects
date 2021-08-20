let audioButtons = document.querySelector('.buttons');
let audioArray = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
let audioIdArray = [];
for (let i = 0; i < 9; i++) {
    audioIdArray.push(document.getElementById('b' + (i + 1)))
}

document.addEventListener("keydown", playAudioKey);

function playAudioKey() {
    for (let i = 0; i < audioArray.length; i++) {
        if (event.key == audioArray[i] || event.key == audioArray[i].toLowerCase()) {
            function swapColor2() {
                swapColor3(i);
            }

            let s = new Audio(`./assets/${audioArray[i]}.mp3`);
            s.play();
            swapColor(i);
            setTimeout(swapColor2, 500)
        }
    }
}

function playAudio(value) {
    if (value != undefined) {
        let s = new Audio(`./assets/${value}.mp3`);
        s.play();
        for (let i = 0; i < audioIdArray.length; i++) {
            function swapColor2() {
                swapColor3(i);
            }

            if (value === audioIdArray[i].getAttribute('value')) {
                swapColor(i);
                setTimeout(swapColor2, 500)
            }
        }
    }
}

function swapColor3(i) {
    audioIdArray[i].style.background = "linear-gradient(to right, #654ea3, #eaafc8)";
    audioIdArray[i].style.color = "white";
    audioIdArray[i].style.animation = "none";
}

function swapColor(i) {
    audioIdArray[i].style.background = "linear-gradient(to right, rgba(255,255,255,0.1),rgba(255,255,255,0.1))";
    audioIdArray[i].style.color = "black";
    audioIdArray[i].style.animation = "grow 0.5s linear";
}

function overAudio(value) {
    for (let i = 0; i < audioIdArray.length; i++) {
        if (value === audioIdArray[i].getAttribute('value')) {
            audioIdArray[i].style.background = "linear-gradient(to right, #433270, #9b566f)";
        }
    }
}

function outAudio(value) {
    for (let i = 0; i < audioIdArray.length; i++) {
        if (value === audioIdArray[i].getAttribute('value')) {
            audioIdArray[i].style.background = "linear-gradient(to right, #654ea3, #eaafc8)";
        }
    }
}