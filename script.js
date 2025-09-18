//your JS code here. If required.
let button = document.querySelector("btn");
let stopBtn = document.querySelector("stop");
// let sound = ["applause","boo","gasp","tada","victory","wrong"]

let currentAudio = null;
button.forEach(button =>{
	button.addEventListener("click",()=>{
		if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    const soundName = button.innerText; // button text = file name
    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
  });
});

// Stop button functionality
stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
});