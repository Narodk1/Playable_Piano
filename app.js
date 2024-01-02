//Realised by YDK 16-08-2022
let allKeys=[];
const pianoKeys = document.querySelectorAll(".piano-keys .key");
let audio = new Audio("tunes/a.wav");//by default , audio src is'a'tune
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;//passing audio srcbased on key pressed
    audio.play();//playing audio
    const clickedKey =document.querySelectorAll(`[data-key=${key}]`);//getting click key element  
    setTimeout(()=>{ //remove active class after 150ms from clicked key 
        clickedKey.classList.add("active");
    },150
    )
}

pianoKeys.forEach(
    key => {
        //caling playtune function with passing data-key value as an argument
        key.addEventListener("click", () => playTune(key.dataset.key));
        // console.log();
    }
);
const pressedKey = (e) =>{
    //if the pressed key in the allKeys array, only call the playtune function 
    if (allKeys.includes(e.key))
    playTune(e.key);
}
document.addEventListener("keydown",pressedKey);