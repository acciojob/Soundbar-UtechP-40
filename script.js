//your JS code here. If required.
 let btn = document.querySelectorAll(".btn")
 
 let stop = document.querySelector(".stop");
 let my_audio = null;
 for(let t of btn){
    t.addEventListener("click",(e)=>{
         my_audio = new Audio(`./sounds/${t.innerText}.mp3`)
        // let my_audio = "./sounds"
        my_audio.play();

    })
 }
 stop.addEventListener("click",(e)=>{
    my_audio.pause();
 })