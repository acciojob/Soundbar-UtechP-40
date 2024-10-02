// script.js
let btn = document.querySelectorAll(".btn");
let stop = document.querySelector(".stop");
let my_audio = null;

for (let t of btn) {
    t.addEventListener("click", (e) => {
        // Pause any currently playing audio
        if (my_audio) {
            my_audio.pause(); 
        }
        
        // Create a new audio instance for the clicked button
        my_audio = new Audio(`./sounds/${t.innerText.toLowerCase()}.mp3`);

        // Play the audio and handle any errors
        my_audio.play().catch(error => {
            console.error("Error playing audio:", error);
            alert("Failed to play audio. Please ensure the file exists.");
        });
    });
}

stop.addEventListener("click", (e) => {
    if (my_audio) {
        my_audio.pause();
    }
});
