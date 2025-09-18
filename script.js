//your JS code here. If required.
let button = document.querySelector("btn");
let stopBtn = document.querySelector("stop");
let sound = ["applause","boo","gasp","tada","victory","wrong"]
button.forEach(btn =>{
	btn.addEventListener("click",()=>{
		stopSounds();
		let sound =  btn.innerText;
		let audio = newAudio(`sound/${sound}.mp3`)
		audio.Play();
		btn.currentAudio = audio;
	})
})

stopBtn.addEventListener('click', stopSounds);

// Stop all sounds function
function stopSounds() {
  buttons.forEach(btn => {
    if (btn.currentAudio) {
      btn.currentAudio.pause();
      btn.currentAudio.currentTime = 0;
    }
  });
}