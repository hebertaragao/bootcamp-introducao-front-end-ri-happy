const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelectorAll(".volume-slider input")

const keysCheck = document.querySelectorAll(".keys-check input")

let mappedKeys = [];

let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play()

  const clickedKey = document.querySelectorAll(`[data-key = "${key}"]`)
  clickedKey.classList.add("activite")
  setTimeout(()=>{clickedKey.classList.remove("activite")},150)
};

  pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
    mappedKeys.push(key.dataset.key)
  });

  document.addEventListener("keydown", (e) => {playTune(e.key); 

    if(mappedKeys.includes(e.key)){
        playTune(e.key)
    }
  
});

const handleVolume = (e) => {
    audio.volume = e.target.value;

}

const showHideKeys = ( ) => {
    pianoKeys.forEach(key => key.classList.toggle("hidde"))
}

volumeSlider.addEventListener("input", handleVolume)

keysCheck.addEventListener("click", showHideKeys)