//Music Objects

let musics = [
    {
        id: 0,
        album_img: './assets/gadar.jpg',
        song_name: 'Udd Jaa Kale Kaava',
        artist: 'Udit Narayan',
        music: '../mp3/Udd Jaa Kaale Kaava  Gadar 2  Sunny Deol, Ameesha  Mithoon, Udit N, Alka Y  Uttam S,Anand Bakshi.mp3'
    },
    {
        id: 1,
        album_img: './assets/heeriye.jpg',
        song_name: 'Heeriye (feat. Arijit Singh)',
        artist: 'Jasleen Royal, Arijit Singh',
        music: '../mp3/Heeriye (Official Video) Jasleen Royal ft Arijit Singh Dulquer Salmaan Aditya Sharma Taani Tanvir.mp3'
    },
    {
        id: 2,
        album_img: './assets/hukum.png',
        song_name: 'Hukum',
        artist: 'Anirudh Ravichander',
        music: '../mp3/Hukum - Thalaivar Alappara (From _Jailer_).mp3'
    },
]




let clutter = "";

musics.forEach(function(music){
    clutter +=`
        <div id="music-${music.id}" class="hero-img transformed-${music.id} flex-d-col d-flex justify-flex-end g-16">
            <div class="hero-img-up">
                <img src="${music.album_img}" alt="">

                '${music.id === 1 ? "<div class='hero-img-hover flex-d-col d-flex align-center justify-space-between'><div class='play-container d-flex align-center justify-center'><span class='material-symbols-outlined'>play_arrow</span></div><div class='song-info flex-d-col d-flex g-4'><h4>Heeriye</h4><h5>Jasleen Royal, Arijit Singh</h5></div></div>" : ''}'
                
            </div>
            <div class="hero-img-down">
                <img src="${music.album_img}" alt="">
                <div class="shadow">
                </div>
            </div>
        </div>
    `
})


document.querySelector("#hero-img-container").innerHTML=clutter;



let slideIndex = 0;
let displaySlide = musics; 

function slideDirection(direction) {

if(direction === back) {
    displaySlide.push(displaySlide.shift())
}

if(direction === forward) {
    displaySlide.unshift(displaySlide.pop());
}

showSlider(musics);
}


function showSlider(music) {
    music = music.length == 0 ? musics : music;
    let clutter = `
        <div id="music-${music[0].id}" class="hero-img transformed-0 flex-d-col d-flex justify-flex-end g-16">
            <div class="hero-img-up">
                <img src="${music[0].album_img}" alt="">

                <div class='hero-img-hover flex-d-col d-flex align-center justify-space-between'>
                    <div class='play-container d-flex align-center justify-center'>
                        <span class='material-symbols-outlined'>play_arrow</span>
                    </div>
                    <div class='song-info flex-d-col d-flex g-4'>
                        <h4>${music[0].song_name}</h4>
                        <h5>${music[0].artist}</h5>
                    </div>
                </div>
            
            </div>
            <div class="hero-img-down">
                <img src="${music[0].album_img}" alt="">
                <div class="shadow">
                </div>
            </div>
        </div>


        <div id="music-${music[1].id}" class="hero-img transformed-1 flex-d-col d-flex justify-flex-end g-16">
            <div class="hero-img-up">
                <img src="${music[1].album_img}" alt="">

                <div class='hero-img-hover flex-d-col d-flex align-center justify-space-between'>
                    <div class='play-container d-flex align-center justify-center'>
                        <span class='material-symbols-outlined'>play_arrow</span>
                    </div>
                    <div class='song-info flex-d-col d-flex g-4'>
                        <h4>${music[1].song_name}</h4>
                        <h5>${music[1].artist}</h5>
                    </div>
                </div>
            
            </div>
            <div class="hero-img-down">
                <img src="${music[1].album_img}" alt="">
                <div class="shadow">
                </div>
            </div>
        </div>


        <div id="music-${music[2].id}" class="hero-img transformed-2 flex-d-col d-flex justify-flex-end g-16">
            <div class="hero-img-up">
                <img src="${music[2].album_img}" alt="">
                <div class='hero-img-hover flex-d-col d-flex align-center justify-space-between'>
                    <div class='play-container d-flex align-center justify-center'>
                        <span class='material-symbols-outlined'>play_arrow</span>
                    </div>
                    <div class='song-info flex-d-col d-flex g-4'>
                        <h4>${music[2].song_name}</h4>
                        <h5>${music[2].artist}</h5>
                    </div>
                </div>
            </div>
            <div class="hero-img-down">
                <img src="${music[2].album_img}" alt="">
                <div class="shadow">
                </div>
            </div>
        </div>
    `;

    document.querySelector("#hero-img-container").innerHTML=clutter;
}



let clutter1 = "";

for(let i = 0; i < 5; i++) {

    for(let j = musics.length - 1; j >= 0; j--){
        const music = musics[j];
        clutter1 +=`
        <div  id="music-${music.id}" class="slider-album flex-d-col d-flex align-center justify-space-between g-12">
            <div class="album-img">
                <img src="${music.album_img}" alt="">
                <div  class='album-img-hover d-flex justify-center align-center'>
                    <span class="material-symbols-outlined" >play_arrow</span>
                </div>
                <div class='wavy d-none album-img-wavyHover'>
                    <img src="./assets/music-playing.gif" alt="wavy-gif">
                </div>
            </div>
            <div class="album-des flex-d-col d-flex align-center justify-space-between">
                <h4>${music.song_name}</h4>
                <h5>${music.artist}</h5>
            </div>
        </div>
        `
    }
}

document.querySelector(".slider-albums-wrapper").innerHTML = clutter1;

//----------MMMMMUUUSSSIIIICCCCC-----pppllllaaaayyyyeeerrrr----llllooooogggggiiiiccc
const allSliderAlbums = document.querySelectorAll('.slider-album');

allSliderAlbums.forEach( (album) => {
    album.addEventListener('click', function() {
        allSliderAlbums.forEach((otherAlbum) => {
            if(otherAlbum !== album){
                otherAlbum.querySelector('.album-img-hover').classList.remove('d-none');
                otherAlbum.querySelector('.wavy').classList.add('d-none');
            }
        })
        album.querySelector('.album-img-hover').classList.add('d-none');
        album.querySelector('.wavy').classList.remove('d-none');
    })
})





//Lyrics Window

const showLyrics = document.querySelector('.showLyrics') 

showLyrics.addEventListener('click', function() {
    
    if (showLyrics.classList.contains('hideLyrics')) {
        console.log('hide')
        gsap.to('.lyrics', {
            y: '100%',
            duration: 1,
            ease: "expo.easeInOut"
        })
        showLyrics.classList.toggle('hideLyrics');
        showLyrics.classList.toggle('showLyrics');
    } else {
        gsap.to('.lyrics', {
            y: '-100%',
            duration: 1,
            ease: "expo.easeInOut"
        })
        showLyrics.classList.toggle('showLyrics');
        showLyrics.classList.toggle('hideLyrics');
    }

});



















//Album Slider
const sliderWrapper = document.getElementById('sliderWrapper');        
const scrollAmount = 200; 

const forwardButton = document.querySelector('.forward');
const backButton = document.querySelector('.back');
// Adjust the scroll amount as needed        
let scrollPosition = 0;        
function scrollForward() {
    if (scrollPosition < sliderWrapper.scrollWidth - sliderWrapper.clientWidth) {
        scrollPosition += scrollAmount;
        console.log(scrollPosition);
        sliderWrapper.style.transform = `translateX(-${scrollPosition}px)`;
    }
    forwardButton.classList.add('inactive');
    backButton.classList.remove('inactive');
}

function scrollBack() {
    if (scrollPosition > 0) {
        scrollPosition -= scrollAmount;
        sliderWrapper.style.transform = `translateX(-${scrollPosition}px)`;
    }
    backButton.classList.add('inactive');
    forwardButton.classList.remove('inactive');
}























//Header Profile DropDown
const profile = document.querySelector('.profile');
const profileDD = document.querySelector('.profile-action')

profile.addEventListener('click', function() {
    profileDD.classList.toggle('opac-0');
})
