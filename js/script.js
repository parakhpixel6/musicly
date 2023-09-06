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

let clutter1 = "";

for(let i = 0; i < 5; i++) {

    for(let j = musics.length - 1; j >= 0; j--){
        const music = musics[j];
        clutter1 +=`
        <div id="music-${music.id}" class="slider-album flex-d-col d-flex align-center justify-space-between g-12">
            <div class="album-img">
                <img src="${music.album_img}" alt="">
                <div class='album-img-hover d-flex justify-center align-center'>
                    <span class="material-symbols-outlined">play_arrow</span>
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

//Album Slider
const sliderWrapper = document.getElementById('sliderWrapper');        
const scrollAmount = 200; 
// Adjust the scroll amount as needed        
let scrollPosition = 0;        
function scrollForward() {            
    if (scrollPosition < sliderWrapper.scrollWidth - sliderWrapper.clientWidth) {                
        scrollPosition += scrollAmount;                
        sliderWrapper.style.transform = `translateX(-${scrollPosition}px)`;                
        document.querySelector('.back').classList.add('active');            
    }            
    if (scrollPosition >= sliderWrapper.scrollWidth - sliderWrapper.clientWidth) {                
        document.querySelector('.forward').classList.remove('active');            
    }        
}        
function scrollBack() {            
    if (scrollPosition > 0) {                
        scrollPosition -= scrollAmount;                
        sliderWrapper.style.transform = `translateX(-${scrollPosition}px)`;                
        document.querySelector('.forward').classList.add('active');           
     }            
    if (scrollPosition <= 0) {                
        document.querySelector('.back').classList.remove('active');            
    }        
}














//Header Profile DropDown
const profile = document.querySelector('.profile');
const profileDD = document.querySelector('.profile-action')

profile.addEventListener('click', function() {
    profileDD.classList.toggle('opac-0');
})
