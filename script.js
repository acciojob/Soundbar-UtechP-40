const buttons = document.querySelectorAll('.btn');
const audioPlayer = document.getElementById('audio-player');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const audioFile = `./sounds/${button.id}.mp3`;
        const audio = new Audio(audioFile);
        
        audio.play().then(() => {
            console.log(`${button.id} is playing`);
        }).catch(error => {
            console.error("Error playing audio:", error);
            alert("Failed to play audio. Please ensure the file exists.");
        });
    });
});
