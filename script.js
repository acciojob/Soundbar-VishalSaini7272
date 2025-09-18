const sounds = ['applause', 'boo', 'gasp', 'tada'];
let currentAudio = null;

// play selected sound
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    stopSound(); // stop previous sound if playing
    const sound = btn.textContent;
    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
  });
});

// stop button
document.querySelector('.stop').addEventListener('click', stopSound);

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}
