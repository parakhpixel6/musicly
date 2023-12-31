//Music Objects
const slider = document.getElementById('slider')
function mDur() { slider.max = audio.duration }
function mSet() { audio.currentTime = slider.value }
let songselectedindex = 0;
let currentSongindex = 0;
let currentSong = document.getElementById('music');
let musics = [
    {
        id: 0,
        album_img: './assets/gadar.jpg',
        song_name: 'Udd Jaa Kale Kaava',
        artist: 'Udit Narayan',
        music: './mp3/Udd Jaa Kaale Kaava  Gadar 2  Sunny Deol, Ameesha  Mithoon, Udit N, Alka Y  Uttam S,Anand Bakshi.mp3'
    },
    {
        id: 1,
        album_img: './assets/heeriye.jpg',
        song_name: 'Heeriye (feat. Arijit Singh)',
        artist: 'Jasleen Royal, Arijit Singh',
        music: './mp3/Heeriye (Official Video) Jasleen Royal ft Arijit Singh Dulquer Salmaan Aditya Sharma Taani Tanvir.mp3'
    },
    {
        id: 2,
        album_img: './assets/hukum.png',
        song_name: 'Hukum',
        artist: 'Anirudh Ravichander',
        music: './mp3/Hukum - Thalaivar Alappara (From _Jailer_).mp3'
    },
]




let clutter = "";

musics.forEach(function (music) {
    clutter += `
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


document.querySelector("#hero-img-container").innerHTML = clutter;



let slideIndex = 0;
let displaySlide = musics;

function slideDirection(direction) {

    if (direction === back) {
        displaySlide.push(displaySlide.shift())
    }

    if (direction === forward) {
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

    document.querySelector("#hero-img-container").innerHTML = clutter;
}



let clutter1 = "";

for (let i = 0; i < 5; i++) {

    for (let j = musics.length - 1; j >= 0; j--) {
        const music = musics[j];
        clutter1 += `
        <div  id="music-${music.id}" class="slider-album dynamic-album flex-d-col d-flex align-center justify-space-between g-12">
            <span class='d-none'>${music.id}</span>
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
const sliderAlbum = document.querySelector('.dynamic-album');

//Declare Variables
const imgpauseplay = document.getElementById('img-pauseplay');
const audio = document.getElementById('audio');
const pauseplay = document.getElementById('pausePlay');
let playing = false;
const lyricsscreen = document.getElementById('lyrics-screen');
const albumInfo = document.querySelector('.album-info');
const bgimage = document.getElementById('bg-image');

const songplay = (newsong, songselectindex = songselectedindex, samesong = false) => {
    songselectedindex = songselectindex;
    console.log(newsong, songselectindex)
    console.log(`${musics[songselectindex].music}`);
    if (newsong) {

        audio.currentTime = 0;
        playing = false;
        currentSong.src = `${musics[songselectindex].music}`;

        albumInfo.innerHTML = `
            <div class="album-img">
                <img src="${musics[songselectindex].album_img}" alt="${musics[songselectindex].song_name}">
            </div>
            <div class="album-des">
                <h4>${musics[songselectindex].song_name}</h4>
                <h5>${musics[songselectindex].artist}</h5>
            </div>
                `;
        audio.load();

        //id, album_img, song_name, music, artist
    }

    playing ? audio.pause() : audio.play();
    playing ? pauseplay.textContent = 'play_arrow' : pauseplay.textContent = 'pause'
    playing = !playing;



    // Define the lyrics content for each value of musics[songselectindex].id
    const lyricsContent0 = `
        <p>Ho Ho Ho Ho…</p>
                            
        <p>Udja Kale Kawa Tere</p>
        <p>Munh Vich Khand Paavan</p>
        
        <p>Udja Kale Kawa Tere</p>
        <p>Munh Vich Khand Paavan</p>
        <p>Le Ja Tu Sandesha Mera</p>
        <p>Main Sadke Jaavan</p>

        <p>Baagon Mein Phir Jhule Pad Gaye</p>
        <p>Pak Gaiyan Mithiyan Ambiyan</p>
        <p>Yeh Chhoti Si Zindagi Te</p>
        <p>Raataan Lambiyan Lambiyan</p>
        
        <p>O Ghar Aaja Pardesi</p>
        <p>Ke Teri Meri Ek Jindri</p>
        <p>O Ghar Aaja Pardesi</p>
        <p>Ke Teri Meri Ek Jindri</p>
        
        <p>Ho Ho Ho Ho…</p>
        
        <p>Chham Chham Karta Aaya Mausam</p>
        <p>Pyar Ke Geeton Ka Ho Ho</p>
        <p>Chham Chham Karta Aaya Mausam</p>
        <p>Pyar Ke Geeton Ka</p>

        <p>Raste Pe Ankhiyan Rasta Dekhein</p>
        <p>Bichhde Meeton Ka</p>
        <p>Saari Saari Raat Jagayein</p>
        <p>Mujhko Teri Yaadein</p>
        
        <p>Mere Saare Geet Bane</p>
        <p>Mere Dil Ki Fariyadein</p>
        <p>O Ghar Aaja Pardesi</p>
        <p>Ke Teri Meri Ek Jindri</p>
        
        <p>O Ghar Aaja Pardesi</p>
        <p>Ke Teri Meri Ek Jindri</p>
        
        <p>Ho Ho Ho Ho…</p>
        
        <p>O Mitra O Yaara</p>
        <p>Yaari Tod Ke Matt Jaana</p>
        <p>Haan Haan O Mitra O Yaara</p>
        <p>Yaari Tod Ke Matt Jaana</p>
        
        <p>Maine Jag Chhoda Tu Mujhko</p>
        <p>Chhod Ke Matt Jaana</p>\

        <p>Aisa Ho Nahi Sakta</p>
        <p>Ho Jaaye Toh Matt Ghabrana</p>
        <p>Main Dauda Aaunga</p>
        <p>Tu Bas Ek Awaaz Lagana</p>                          
        
        <p>O Ghar Aaja Pardesi</p>
        <p>Ke Teri Meri Ek Jindri</p>
        <p>O Ghar Aaja Pardesi</p>
        <p>Ke Teri Meri Ek Jindri</p>

        <p>Ghar Aaja Sajna Pardesi</p>
        <p>Ghar Aaja Sajna Pardesi</p>
        <p>Ghar Aaja Sajna Pardesi</p>
        <p>Rabb Da Shukar Manavaan Main></p>

        <p>Ghar Aaja Sajna Pardesi</p>
        <p>Ghar Aaja Sajna Pardesi</p>
        <p>Ghar Aaja Sajna Pardesi</p>
        <p>Rabb Da Shukar Manavaan Main></p>
`;

    const lyricsContent1 = `
    <p>Heeriye Heeriye Aa Aa</p>
                    <p>Heeriye Heeriye Aa Aa</p>

                    <p>Teri Hoke Maraan</p>
                    <p>Jind Jaan Karaan</p>
                    <p>Teri Hoke Maraan</p>
                    <p>Jind Jaan Karaan</p>

                    <p>Heeriye Heeriye Aa Aa</p>
                    <p>Heeriye Heeriye Aa Aa</p>

                    <p>Neendan Vi Tutt Tutt Gaiyan</p>
                    <p>Chundi Main Taare Rahiyan</p>
                    <p>Sochan Vich Teriyan Paiyan</p>
                    <p>Sochan Vich Teriyan Paiyan</p>
                    <p>Haaniya</p>

                    <p>Saari Saari Raat Jagave</p>
                    <p>Yaadan Nu Zikar Tera Ve</p>
                    <p>Aaye Kyun Na Aaye Subah Ve</p>
                    <p>Haaniya</p>

                    <p>Teri Hoke Maraan</p>
                    <p>Jind Jaan Karaan</p>
                    <p>Teri Hoke Maraan</p>
                    <p>Jind Jaan Karaan</p>

                    <p>Heeriye Heeriye Aa Aa</p>
                    <p>Heeriye Heeriye Aa Aa</p>

                    <p>Chheti Aa Chheti</p>
                    <p>Sohne Raat Na Langhe</p>
                    <p>Aaja Ve Aaja</p>
                    <p>Sohne Raat Na Langhe</p>

                    <p>Chheti Aa Chheti</p>
                    <p>Sohne Raat Na Langhe</p>
                    <p>Aaja Ve Aaja</p>
                    <p>Sohne Raat Na Langhe</p>


                    <p>Jad Vi Tainu Takkdi Aan Ve</p>
                    <p>Akhiyan Vi Shukar Manave</p>
                    <p>Kole Aa Door Na Jaa Ve</p>
                    <p>Haaniya</p>


                    <p>Palkan Di Karke Chhavan</p>
                    <p>Dil De Tainu Kol Bithavan</p>
                    <p>Takk Takk Tainu Khairan Paavan</p>
                    <p>Haaniya Teri</p>

                    <p>Haaniya Teri</p>
                    <p>Teri Haaniya Teri</p>

                    <p>Teri Hoke Maraan</p>
                    <p>Jind Jaan Karaan</p>
                    <p>Teri Hoke Maraan</p>
                    <p>Jind Jaan Karaan</p>

                    <p>Heeriye Heeriye Aa Aa</p>
                    <p>Heeriye Heeriye Aa Aa</p>
`;

    const lyricsContent2 = `
    <p>Hukum Tiger Ka Hukum</p>
<p>Hukum Tiger Ka Hukum..</p>

<p>Alappara Kelapparom Dha Paaru Da</p>
<p>Kalavaram Yeranguna Tha Daaru Da</p>
<p>Nelavaram Puriyidha Okkaruda</p>
<p>Thalaivaru Kalathula Super Star’u Da</p>

<p>Varamora Odachida Set Aanavan</p>
<p>Thalamora Kadakura Hit Aanavan</p>
<p>Eliyavan Manasula Fit Aanavan</p>
<p>Mudivula Jeichida Urithaanavan</p>

<p>Nadakkura Nada Puyalam Iche</p>
<p>Mudi Odhukkura Style’ah Iche</p>
<p>Kannavilla Ithu Real’ah Iche</p>

<p>Thala Mudhal Adi Vara</p>
<p>Thalaivaru Alappara</p>

<p>Thani Thala Pola Bail’ah Iche</p>
<p>Ada Nooru’ku Dail’ah Iche</p>
<p>Sethukkura Edam Jail’ah Iche</p>

<p>Sera Mudhal Thera Vara</p>
<p>Thalaivaru Alappara</p>

<p>Onn Alumba Paatthavan</p>
<p>Ungoppan Whistle’ah Kaettavan</p>
<p>Onn Mavanum Peranum</p>
<p>Aatam Poda Veppavan</p>

<p>Ivan Paera Thooka Naalu Paeru</p>
<p>Pattatha Parika Nooru Paeru</p>
<p>Kutti Chevutha Etti Paatha</p>
<p>Usura Kodukka Kodi Paeru</p>

<p>Hukum Tiger Ka Hukum..</p>

<p>Alappara Kelapparom</p>
<p>Thalaivaru Nerandharam</p>

<p>Nee End Card’u Vaicha</p>
<p>Ivva Trend’ah Mathi Vaippa</p>
<p>Nee Kuriya Paruch’u Vaicha</p>
<p>Ivva Valayil Yeri Nippa</p>

<p>Suthi Adikira Lathi Kitta Sikkina</p>
<p>Attakathi Ellam Podi Dhaan</p>
<p>Kandabadi Nee Kambeduthu Suthuna</p>
<p>Uchanthalayila Idi Dhaan</p>

<p>Narachiruchinu Morgaikdhe</p>
<p>Dhora Kitta Vanthu Dhoraikadhe</p>
<p>Sirayila Sikki Tholayadhe</p>
<p>Orasara Varayila Unakoru Korayila</p>

<p>Thoda Nerungura Mudiyadhe</p>
<p>Edhu Izhukudhu Theriyadhe</p>
<p>Kulla Narikkidhu Puriyadhe</p>

<p>Vidhigala Thirupura</p>
<p>Thalaivaru Alappara</p>

<p>Onn Alumba Paatthavan</p>
<p>Ungoppan Whistle’ah Kaettavan</p>
<p>Onn Mavanum Peranum</p>
<p>Aatam Poda Veppavan</p>

<p>Ivan Paera Thooka Naalu Paeru</p>
<p>Pattatha Parika Nooru Paeru</p>
<p>Kutti Chevuttha Etti Paatha</p>
<p>Usura Kodukka Kodi Paeru</p>

<p>Alappara Kelapparom</p>
<p>Thalaivaru Nerandharam</p>
<p>Alappara Kelapparom</p>
<p>Thalaivaru Nerandharam</p>

<p>Hukum Tiger Ka Hukum..</p>

`;

    // Determine which content to use based on musics[songselectindex].id
    const selectedLyricsContent =
        musics[songselectindex].id === 0
            ? lyricsContent0
            : musics[songselectindex].id === 1
                ? lyricsContent1
                : lyricsContent2;

    // Set the content of lyrics-writer-wrapper
    const lyricsWriterWrapper = document.querySelector('.lyrics-writer-wrapper');

        





    lyricsscreen.innerHTML = `
    <div class="lyrics-container">
        <img class="lyricsBgImg" src="${musics[songselectindex].album_img}" alt="song-background">
       
        <div class="lyrics-wrapper d-flex align-center justify-space-between">
            <div class="lyrics-img">
                <img clas="lyricsImg" src="${musics[songselectindex].album_img}" alt="album-img">
            </div>
            <div class="lyrics-writer d-flex justify-flex-end">
                <div class="lyrics-writer-wrapper">
                    ${lyricsWriterWrapper.innerHTML = selectedLyricsContent}
                </div>
            </div>
        </div>
    </div>
    `
    console.log(lyricsscreen.children)
    console.log(musics[songselectindex].album_img)

}

pauseplay.addEventListener('click', function () {
    if (playing) {
        // Change to "play" icon and pause the audio        
        pauseplay.textContent = "play_arrow";
        audio.pause();
        playing = false;
    } else {
        playing = true;
        // Change to "pause" icon and play the audio        
        pauseplay.textContent = "pause";
        audio.play();
    }
});

const mPlay = () => {
    percent = audio.currentTime / audio.duration * 100;

    slider.value = audio.currentTime;
    if (audio.currentTime == audio.duration) {
        audio.currentTime = 0
        percent = audio.currentTime / audio.duration * 100;
        changesong('next');
    }
}


const changesong = (changesong) => {

    if (changesong == 'previous') {
        songplay(true, songselectedindex == 0 ? songselectedindex : songselectedindex - 1);
    } else {
        songplay(true, songselectedindex == musics.length - 1 ? 0 : songselectedindex + 1);
    }
    console.log(songselectedindex);
}


allSliderAlbums.forEach((album) => {
    album.addEventListener('click', function (event) {
        allSliderAlbums.forEach((otherAlbum) => {
            if (otherAlbum !== album) {
                otherAlbum.querySelector('.album-img-hover').classList.remove('d-none');
                otherAlbum.querySelector('.wavy').classList.add('d-none');
            }
        })
        album.querySelector('.album-img-hover').classList.add('d-none');
        album.querySelector('.wavy').classList.remove('d-none');
        // console.log('parentnode=>', album.parentNode)
        // console.log('parentnode=>', album.parentNode.childNodes[album])
        // currentSongindex = +(album.parentNode.childNodes[album].innerHTML);
        // console.log(currentSongindex)
        const spanElement = album.querySelector('span');
        if (spanElement) {
            const textContent = spanElement.textContent;
            let songselectedindex = +(textContent);
            console.log(typeof (songselectedindex), songselectedindex)
            slider.value = 0;

            songplay(true, songselectedindex);
        }
        document.querySelector('.players').classList.add('d-flex');
        document.querySelector('.players').classList.remove('d-none');
        document.querySelector('body').classList.remove('over-hide');
    })

})


const timeline = document.querySelector('.timeline');
function changeTimelinePosition() {
    const percentagePosition = (100 * audio.currentTime) / audio.duration;
    timeline.style.backgroundSize = `${percentagePosition}% 100%`;
    timeline.value = percentagePosition;
}
audio.ontimeupdate = changeTimelinePosition;


const lyricsWriter = document.querySelector('.lyrics-writer');
function scrollLyricsWriter() {
    const percentagePosition = (100 * audio.currentTime) / audio.duration;
    const maxScroll = lyricsWriter.scrollHeight - lyricsWriter.clientHeight;
    const scrollValue = (percentagePosition / 100) * maxScroll;
    lyricsWriter.scrollTop = scrollValue;
}

audio.addEventListener('timeupdate', scrollLyricsWriter);


//Lyrics Window

const showLyrics = document.querySelector('.showLyrics');
const hideLyricsBtn = document.querySelector('.hideLyricsBtn');
const hideLyrics = document.querySelector('.hideLyrics');

showLyrics.addEventListener('click', function () {

    if (showLyrics.classList.contains('hideLyrics')) {
        console.log('hide')
        gsap.to('.lyrics', {
            y: `100`,
            duration: 1,
            ease: "expo.Power1"
        })
        showLyrics.classList.toggle('hideLyrics');
        showLyrics.classList.toggle('showLyrics');
        document.querySelector('body').classList.toggle('over-hide')
    } else {
        gsap.to('.lyrics', {
            y: '-100%',
            duration: 1,
            ease: "expo.Power1"
        })
        showLyrics.classList.toggle('showLyrics');
        showLyrics.classList.toggle('hideLyrics');
        document.querySelector('body').classList.toggle('over-hide')
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

profile.addEventListener('click', function () {
    profileDD.classList.toggle('opac-0');
})
