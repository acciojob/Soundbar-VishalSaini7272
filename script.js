// List of sounds (must match the filenames in "sounds" folder)
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsContainer = document.getElementById('buttons');
let currentAudio = null;

// Create sound buttons
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSound();
    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
  });

  buttonsContainer.appendChild(btn);
});

// Stop button functionality
document.querySelector('.stop').addEventListener('click', stopSound);

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}
