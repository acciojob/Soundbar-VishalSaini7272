const sounds = ['applause', 'boo', 'gasp', 'tada'];
let currentAudio = null;

// play sound when btn clicked
document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', () => {
    stopSound(); // stop previous if playing
    const soundName = button.textContent.trim();
    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
  });
});

// stop sound on stop button click
document.querySelector('.stop').addEventListener('click', stopSound);

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}
