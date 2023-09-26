const radio = document.getElementById("radio");
const playButton = document.getElementById("play_button");
const volumen = document.getElementById("volumen");
radio.volume = 0.5;
volumen.value = radio.volume * 100;

function reproducir() {
  playButton.addEventListener("click", (e) => {
    if (radio.paused) {
      radio.play();
      playButton.innerText = "Pause";
    } else {
      radio.pause();
      playButton.innerText = "Play";
    }
  });
}

function controlVolumen() {
  volumen.addEventListener("change", (e) => {
    let { value } = e.target;
    radio.volume = value / 100;
  });
}

window.addEventListener("load", reproducir, false);
window.addEventListener("load", controlVolumen, false);
