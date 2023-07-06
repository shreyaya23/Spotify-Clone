console.log("Welcome to spotify");
// initialize the variables
let songIndex = 0;
let audioElement =  new Audio("4MP3");
let masterPlay = document.getElementById("masterplay");
let progressBar = document.getElementById("masterplay");
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Beautiful", filepath:"6MP3", coverPath:"9.jpeg"},
    { songName: "Proper Patol", filepath:"1MP3", coverPath:"8.jpeg"},
    { songName: "Brown Rang", filepath:"2MP3", coverPath:"7.jpeg"},
    { songName: "Daftar ki girl", filepath:"3MP3", coverPath:"4.jpeg"},
    { songName: "Finess", filepath:"5MP3", coverPath:"1.jpeg"},
    { songName: "Kohinoor", filepath:"7MP3", coverPath:"3.jpeg"},
    { songName: "We don't talk anymore", filepath:"8MP3", coverPath:"6.jpeg"},
    { songName: "134340 BTS", filepath:"9MP3", coverPath:"5.jpeg"},
    { songName: "Black swan", filepath:"10MP3", coverPath:"2.jpeg"},
    { songName: "Attention", filepath:"4MP3", coverPath:"cute.jpeg"},
]

songItems.forEach((element, i) => {
   
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//"C:\Users\HP\OneDrive\Desktop\Spotifyclone\7MP3 - Shortcut.lnk"
//audioElement.play()
//handle play?pause
console.log(masterPlay);
console.log(audioElement, 'GG');
masterPlay.addEventListener('click', ()=>{
    console.log('JJ');
    if(audioElement.paused || audioElement.currentTime<=0) {
        console.log('its currently paused');
        
        audioElement.play();
        console.log('eil this gt logged');
        masterPlay.classList.remove("fa-circle-play" );
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
       
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Listen to events
audioElement.addEventListener("timeupdate",()=> {
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})
progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.target.classList.remove('fa-circle-pause');
    element.target.classList.add('fa-circle-play');
   
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=> {
     console.log(e.target);  
     makeAllPlays();
     songIndex = parseInt(e.target.id);
     e.target.classList.remove('fa-circle-play');
     e.target.classList.add('fa-circle-pause');
     audioElement.src = '${songindex+1}3MP3';
     masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     gif.style.opacity = 1;
     masterPlay.classList.remove("fa-circle-play" );
    masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex>9) {
        songIndex =0 
    }
    else {
        songIndex += 1;
    }
    audioElement.src = '${songindex+1}3MP3';
    masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove("fa-circle-play" );
    masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex<=9) {
        songIndex =0 
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = '${songindex+1}3MP3';
    masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove("fa-circle-play" );
    masterPlay.classList.add('fa-circle-pause');

})