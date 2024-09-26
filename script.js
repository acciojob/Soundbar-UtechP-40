//your JS code here. If required.
//your JS code here. If required.
 let btn = document.querySelectorAll(".btn")
 
 let stop = document.querySelector(".stop")
 for(let t of btn){
    t.addEventListener("click",(e)=>{
        let my_audio = new Audio(`./sounds/${t.innerText}.mp3`)
        // let my_audio = "./sounds"
        my_audio.play();
 stop.addEventListener("click",(e)=>{
    my_audio.pause();
 })
    })
 }
 