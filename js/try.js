// Music Objects
let musics = [
    {
        id: 0,
        album_img: './assets/gadar.jpg',
        song_name: 'Udd Jaa Kale Kaava',
        artist: 'Udit Narayan',
        music: '../mp3/Udd Jaa Kaale Kaava  Gadar 2  Sunny Deol, Ameesha  Mithoon, Udit N, Alka Y  Uttam S,Anand Bakshi.mp3'
    },
    // Add more music objects here
];

let currentMusicIndex = 0;
const musicPlayer = document.querySelector("#music-player");
const playPauseButton = document.querySelector("#play-pause-button");
const nextButton = document.querySelector("#next-button");
const previousButton = document.querySelector("#previous-button");

// Function to load and play the current music
function loadAndPlayMusic(index) {
    const music = musics[index];
    musicPlayer.src = music.music;
    musicPlayer.load();
    musicPlayer.play();
    playPauseButton.textContent = "Pause";
}

// Initialize the music bar with the first music
loadAndPlayMusic(currentMusicIndex);

// Event listener for Play/Pause button
playPauseButton.addEventListener("click", function () {
    if (musicPlayer.paused) {
        musicPlayer.play();
        playPauseButton.textContent = "Pause";
    } else {
        musicPlayer.pause();
        playPauseButton.textContent = "Play";
    }
});

// Event listener for Next button
nextButton.addEventListener("click", function () {
    currentMusicIndex = (currentMusicIndex + 1) % musics.length;
    loadAndPlayMusic(currentMusicIndex);
});

// Event listener for Previous button
previousButton.addEventListener("click", function () {
    currentMusicIndex = (currentMusicIndex - 1 + musics.length) % musics.length;
    loadAndPlayMusic(currentMusicIndex);
});


musics.forEach(function (music) {
    clutter += `
        <div id="music-${music.id}" class="music-card" onclick="loadAndPlayMusic(${music.id})">
            <div class="hero-img-up">
                <img src="${music.album_img}" alt="">
            </div>
            <div class="hero-img-down">
                <img src="${music.album_img}" alt="">
                <div class="shadow">
                </div>
            </div>
        </div>
    `;
});

document.querySelector("#hero-img-container").innerHTML = clutter;


// /* Hide the volume control */
// #audio - player:: -webkit - media - controls - volume - slider {
//     display: none;
// }

// /* Hide the volume three dots */
// #audio - player:: -webkit - media - controls - volume - button {
//     display: none;
// }

// /* Hide the time display */
// #audio - player:: -webkit - media - controls - current - time - display,
//     #audio - player:: -webkit - media - controls - time - remaining - display {
//     display: none;
// }
















//HERO SECTION JS LOGIC
let currentIndex = 0;
let forwardClickCount = 0;
let backwardClickCount = 0;


let musicElements = [
    document.querySelector("#music-0"),
    document.querySelector("#music-1"),
    document.querySelector("#music-2")
]
let flag = 0

function moveSlider(direction) {  
    
    if (direction === 'forward') {    
        currentIndex = (currentIndex + 1) % musics.length;
        if(forwardClickCount < 2){
            forwardClickCount++;
            
        } else {
            forwardClickCount = 0
        }
    } else if (direction === 'backward') {    
        currentIndex = (currentIndex - 1 ) % musics.length;  

        if(backwardClickCount < 2){
            backwardClickCount++;
        } else {
            backwardClickCount = 0
        }
    }  
    gsap.to('.hero-img', {    
        xPercent: -currentIndex * 100,    
        duration: 1, 
        ease: 'power2.inOut', 
    });

    if (backwardClickCount === 1) {
        // transform: perspective(478px) rotateY(-345deg) scale(0.9);
        console.log('hii music-0');
        musicElements[0].classList.remove('transformed-0');
        musicElements[0].classList.add('transformed-1');
        musicElements[1].classList.remove('transformed-1');
        musicElements[1].classList.add('transformed-2');
        flag = 1;
    } else if (flag === 1) {
        // transform: perspective(478px) rotateY(-345deg) scale(0.9);
        console.log('hii music-1');
        musicElements[0].classList.remove('transformed-1');
        musicElements[0].classList.add('transformed-2');

        flag = 2;
    }

    if (forwardClickCount === 1) {
        // transform: perspective(478px) rotateY(-345deg) scale(0.9);
        console.log('hii music-2');
        musicElements[1].classList.remove('transformed-1');
        musicElements[1].classList.add('transformed-0');
        musicElements[2].classList.remove('transformed-2');
        musicElements[2].classList.add('transformed-1');
    } 

    console.log(forwardClickCount);
    console.log(backwardClickCount);

}

document.querySelector('#back').addEventListener('click', () => moveSlider('forward'));
document.querySelector('#forward').addEventListener('click', () => moveSlider('backward'));
