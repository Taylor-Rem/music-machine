// BUTTONS
const checkBox = document.querySelectorAll('.unmute');
const button = document.querySelectorAll('.button');
const slider = document.querySelectorAll('.slider');
// SOUNDS
const audio = [
  (drumsOne = new Audio('res/Drums1.wav')),
  (drumsTwo = new Audio('res/Drums2.wav')),
  (drumsThree = new Audio('res/Drums3.wav')),
  (bassOne = new Audio('res/Bass1.wav')),
  (bassTwo = new Audio('res/Bass2.wav')),
  (bassThree = new Audio('res/Bass3.wav')),
  (pianoOne = new Audio('res/Piano1.wav')),
  (pianoTwo = new Audio('res/Piano2.wav')),
  (pianoThree = new Audio('res/Piano3.wav')),
];

// PLAY AUDIO
const playAudio = () => {
  for (let i = 0; i < audio.length; i++) {
    audio[i].load();
    audio[i].play();
  }
};
// STOP AUDIO
const stopAudio = () => {
  for (let i = 0; i < audio.length; i++) {
    checkBox[i].checked = false;
    audio[i].pause();
    audio[i].currentTime = 0;
  }
  clearTimeout(timeout);
  counter = 0;
};

// CHECK MUTED
const checkMuted = () => {
  for (let i = 0; i < audio.length; i++) {
    if (checkBox[i].checked) {
      audio[i].muted = false;
    } else {
      audio[i].muted = true;
    }
  }
};

// VOLUME SLIDERS
const drumsVolume = () => {
  for (let i = 0; i <= 2; i++) {
    audio[i].volume = slider[0].value;
  }
};
const bassVolume = () => {
  for (let i = 3; i <= 5; i++) {
    audio[i].volume = slider[1].value;
  }
};
const pianoVolume = () => {
  for (let i = 6; i <= 8; i++) {
    audio[i].volume = slider[2].value;
  }
};
for (let i = 0; i < slider.length; i++) {
  slider[i].addEventListener('mousemove', () => {
    bassVolume();
    drumsVolume();
    pianoVolume();
  });
}
// COUNTER
let counter = '';
const countUp = () => {
  timeout = setTimeout(() => {
    if (counter <= 15) {
      counter++;
    } else {
      counter = 1;
    }
    console.log(counter);
    if (counter === 1) {
      playAudio();
      checkMuted();
    }
    if (counter === 5) {
      checkMuted();
    }
    if (counter === 9) {
      checkMuted();
    }
    if (counter === 13) {
      checkMuted();
    }

    countUp();
  }, 462);
};

// EVENT LISTENERS

// start button
button[0].addEventListener('click', () => {
  countUp();
});
// stop button
button[1].addEventListener('click', () => {
  stopAudio();
});
