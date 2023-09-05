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
        <div class="hero-img flex-d-col d-flex justify-flex-end g-16">
            <div class="hero-img-up">
                <img src="${music.album_img}" alt="">
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



//HERO SECTION JS LOGIC
let currentIndex = 0;
function moveSlider(direction) {  
    if (direction === 'forward') {    
        currentIndex = (currentIndex + 1) % musics.length;
    } else if (direction === 'backward') {    
        currentIndex = (currentIndex - 1 ) % musics.length;  
    }  
    gsap.to('.hero-img', {    
        xPercent: -currentIndex * 100,    
        duration: 1, 
        ease: 'power2.inOut', 
    });
}
document.querySelector('#back').addEventListener('click', () => moveSlider('forward'));
document.querySelector('#forward').addEventListener('click', () => moveSlider('backward'));

