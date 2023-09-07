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
