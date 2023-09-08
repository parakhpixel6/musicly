let arrowbuttons = document.querySelectorAll(".trend-header button img");
let songs = document.querySelector('.songs-list');
let songselectedindex;
let currentSong = document.getElementById('music');
let imgwave = document.getElementById('wave-gif');

// console.log('songwidth', songwidth)
const slider = document.getElementById('slider')

function mDur() { slider.max = audio.duration }

function mSet() { audio.currentTime = slider.value }
const songLyrics = `
Heeriye, Heeriye, aa
Heeriye, Heeriye, aa
Teri hoke maraan Jind Jaan karaan
Teri hoke maraan Jind Jaan karaan
Heeriye, Heeriye, aa
Heeriye, Heeriye, aa

Neendan vi Tutt Tutt gaiyan,
Chundi main Taare rahiyaan
Sochan vich Teriyan paiyaaan 
Haaniyaaa

Saari saar raat Jaga ve
Yadan nu Zikar Tera Ve
Aaye kyun na aaye subha ve 
Haaniyaa

Teri hoke maraan Jind Jaan karaan
Teri hoke maraan Jind Jaan karaan
Heeriye, Heeriye, aa
Heeriye, Heeriye, aa

Chheti aa Chheti Sohne Raat na lange
Aaja ve Aaja Sohne Raat na lange
Chheti aa Chheti Sohne Raat na lange
Aaja ve Aaja Sohne Raat na lange

Jad vi tenu takdi haan ve,
Akhiyan vi shukar manave
Kole aa door na jaave, haaniya

Palkaan di kar ke chhaanva
Dil de tenu kol bithaanva
Tak Tak tenu Khairan paanva, haaniya

teri... haaniya, teri
teri... haaniya, teri

Teri hoke maraan Jind Jaan karaan
Teri hoke maraan Jind Jaan karaan
Heeriye, Heeriye, aa
Heeriye, Heeriye, aa

haaniya, teri
haaniya teri

`;

const songListObj = [{
    id: 1,
    name: 'Udd Jaa',
    artist: 'Udit Narayan',
    songsrc: './assets/songs/Udd-song.mp3',
    imagesrc: './assets/uddjaa170px.jpg',
    fullimage: './assets/uddjaa.jpg'
},
{
    id: 2,
    name: 'Heeriye',
    artist: 'Jasleen Royal, Arijit Sing',
    songsrc: './assets/songs/Heeriye-song-mp3.mp3',
    imagesrc: './assets/heeriye170px.jpg',
    fullimage: './assets/heeriye.jpg'
},
{
    id: 3,
    name: 'Hukum',
    artist: 'Anirudh Ravichander',
    songsrc: './assets/songs/Hukum-song.mp3',
    imagesrc: './assets/hukum170px.jpg',
    fullimage: './assets/hukum.jpg'
},
{
    id: 4,
    name: 'Udd Jaa',
    artist: 'Udit Narayan',
    songsrc: './assets/songs/Udd-song.mp3',
    imagesrc: './assets/uddjaa170px.jpg',
    fullimage: './assets/uddjaa.jpg'
},
{
    id: 5,
    name: 'Heeriye',
    artist: 'Jasleen Royal, Arijit Sing',
    songsrc: './assets/songs/Heeriye-song-mp3.mp3',
    imagesrc: './assets/heeriye170px.jpg',
    fullimage: './assets/heeriye.jpg'
},
{
    id: 6,
    name: 'Hukum',
    artist: 'Anirudh Ravichander',
    songsrc: './assets/songs/Hukum-song.mp3',
    imagesrc: './assets/hukum170px.jpg',
    fullimage: './assets/hukum.jpg'
},
{
    id: 7,
    name: 'Udd Jaa',
    artist: 'Udit Narayan',
    songsrc: './assets/songs/Udd-song.mp3',
    imagesrc: './assets/uddjaa170px.jpg',
    fullimage: './assets/uddjaa.jpg'
},
{
    id: 8,
    name: 'Heeriye',
    artist: 'Jasleen Royal, Arijit Sing',
    songsrc: './assets/songs/Heeriye-song-mp3.mp3',
    imagesrc: './assets/heeriye170px.jpg',
    fullimage: './assets/heeriye.jpg'
},
{
    id: 9,
    name: 'Hukum',
    artist: 'Anirudh Ravichander',
    songsrc: './assets/songs/Hukum-song.mp3',
    imagesrc: './assets/hukum170px.jpg',
    fullimage: './assets/hukum.jpg'
}]

let trendingsongs;

songListObj.forEach((songitem, index) => {
    trendingsongs = (trendingsongs ? trendingsongs : '') + `
    <li class="song">
    <span hidden>${index}</span>
        <img src="${songitem.imagesrc}" alt=${songitem.name}>
        <img src="./assets/play_arrow.png" alt="playpause" class="song-play-image">

        <h4>${songitem.name}</h4>
        <span>${songitem.artist}</span>
    </li>
    `
    // <img src="${songitem.imagesrc}" alt=${songitem.name}>

    // console.log(index)
})
songs.innerHTML = trendingsongs;
let songwidth = songs.querySelector('.song').offsetWidth;


arrowbuttons.forEach(btn => {
    btn.addEventListener('click', () => {
        songs.scrollLeft += btn.id === 'left' ? -songwidth : songwidth;
    })
})

songs.addEventListener('click', (event) => {

    if (event.target.parentNode.childNodes[1].innerHTML == songselectedindex) {
        if (imgwave && imgwave.parentNode)
            imgwave.parentNode.style.cssText = `
        position:static;
        `;
        imgwave.remove();
        songplay(false, songselectedindex)
        return;
    }

    console.log(event.target)
    console.log(event)
    if (event.target.nodeName == 'LI') {
        return;
    }
    let bottomplayer = document.getElementById('bottom-player');
    bottomplayer.classList.remove("bottomplayerhide");
    // console.log(event.target.nextElementSibling.textContent)
    console.log('parentnode=>', event.target.parentNode.childNodes)
    console.log('parentnode=>', event.target.parentNode)
    songselectedindex = +(event.target.parentNode.childNodes[1].innerHTML);
    console.log(songselectedindex)
    event.target.parentNode.style.cssText = `
    opacity: 0.5;
    position:relative;
    `;
    if (imgwave && imgwave.parentNode) {
        console.log(imgwave.parentNode)
        imgwave.parentNode.style.cssText = `
        position:static;
        `;
        imgwave.remove();


    }
    imgwave = document.createElement("IMG");
    imgwave.setAttribute("src", "./assets/wave.gif");
    imgwave.setAttribute("alt", "wave gif");
    imgwave.setAttribute("id", "wave-gif");

    event.target.parentNode.style.cssText = 'position:relative;opacity: 0.5;'
    event.target.parentNode.appendChild(imgwave);
    imgwave.style.cssText = `
    position:absolute;
    top: 2%;
    left: 7%;
`
    slider.value = 0;

    songplay(true, songselectedindex);

})

// slider
lyricsplace = document.getElementById('lyrics-place');
const slide = () => {
    // percent = slider.value/slider.max *100;
    // console.log(percent);

    // slider.style.background = `linear-gradient(to right, #ffffff ${percent}%, #555 ${percent}%)`
}
const imgpauseplay = document.getElementById('img-pauseplay');
const audio = document.getElementById('audio');
const pauseplay = document.getElementById('pauseplay');
let playing = false;
const lyricsscreen = document.getElementById('lyrics-screen');
const songdesc = document.querySelector('.song-desc');
const bgimage = document.getElementById('bg-image');

const songplay = (newsong, songselectindex = songselectedindex, samesong = false) => {
    songselectedindex = songselectindex;
    console.log(newsong, songselectindex)
    if (newsong) {
        if (imgwave && imgwave.parentNode) {
            imgwave.parentNode.style.cssText = `
            position:static;
            `;
            imgwave.remove();
        }
        audio.currentTime = 0;
        playing = false;
        currentSong.src = `${songListObj[songselectindex].songsrc}`;
        songdesc.innerHTML = `
        <img src="${songListObj[songselectindex].imagesrc}" alt="${songListObj[songselectindex].name}">
                <div>
                    <h4>${songListObj[songselectindex].name}</h4>
                    <span>${songListObj[songselectindex].artist}</span>
                </div>
                `;
        audio.load();
    }

    playing ? audio.pause() : audio.play();
    playing ? imgpauseplay.src = './assets/play_arrow.png' : imgpauseplay.src = './assets/pause.png'
    playing = !playing;

    //new added for gif removal
    if (!playing) {
        if (imgwave && imgwave.parentNode) {
            imgwave.parentNode.style.cssText = `
            position:static;
            `;
            imgwave.remove();
        }

        imgpause = document.createElement("IMG");
        imgpause.setAttribute("src", "./assets/pause.png");
        imgpause.setAttribute("alt", "pauseimg");
        imgpause.setAttribute("id", "pauseimg");
        songs.children[songselectedindex].appendChild(imgpause);
        imgpause.parentNode.style.cssText = `
            position:relative;
            opacity:0.5;
            `;
        imgpause.style.cssText = `
        display: block;
        position: absolute;
        opacity:1;
        left: 60px;
        top: 60px;
`

    } else {
        // imgpause.parentNode.style.cssText = `
        //     position:static;
        //     `;
        // imgpause.remove();
        imgwave = document.createElement("IMG");
        imgwave.setAttribute("src", "./assets/wave.gif");
        imgwave.setAttribute("alt", "wave gif");
        imgwave.setAttribute("id", "wave-gif");
        console.log(songselectedindex)
        console.log(songs.children[songselectedindex])

        songs.children[songselectedindex].style.cssText = 'position:relative;opacity: 0.5;'
        songs.children[songselectedindex].appendChild(imgwave);
        imgwave.style.cssText = `
    position:absolute;
    top: 2%;
    left: 7%;
`
    }

    //

    lyricsscreen.innerHTML = `
    <div class="bg-image">

        </div>
        <img src="./assets/expand_more.png" class="expand-more" alt="expand more">
        <img src="${songListObj[songselectindex].fullimage}" class="song-img" alt="${songListObj[songselectindex].name}">
        <div id="lyrics-place">
            <p id="lyrics-para"></p>
        </div>
    `
    console.log(lyricsscreen.children)
    console.log(songListObj[songselectindex].fullimage)
    lyricsscreen.children[0].style.cssText = `
    background: url(${songListObj[songselectindex].fullimage});
    height: 100%;
    background-size: cover;
    /* background: rgba(0, 0, 0, 0.50); */
    filter: blur(3px);
    `;
    if (playing) {

    }


}

// songs.addEventListener('mouseover', event => {
//     if (playing) {

//     }
// })

// songs.addEventListener('mouseout', event => {
//     if (playing) {

//     }
// })

const changesong = (changesong) => {
    console.log(songselectedindex)

    if (changesong == 'previous') {
        songplay(true, songselectedindex == 0 ? songselectedindex : songselectedindex - 1);
    } else {
        songplay(true, songselectedindex == songListObj.length - 1 ? 0 : songselectedindex + 1);
    }
    console.log(songselectedindex)

    console.log('parentnode=>', songs.children)
    imgwave.parentNode.style.cssText = `
        position:static;
        `;
    imgwave.remove();


    console.log(songs.children[songselectedindex])
    imgwave = document.createElement("IMG");
    imgwave.setAttribute("src", "./assets/wave.gif");
    imgwave.setAttribute("alt", "wave gif");
    imgwave.setAttribute("id", "wave-gif");

    songs.children[songselectedindex].style.cssText = 'position:relative;opacity: 0.5;'
    songs.children[songselectedindex].appendChild(imgwave);
    imgwave.style.cssText = `
    position:absolute;
    top: 2%;
    left: 7%;
`

}
let scrollby = 0;

// function getHeight() {

//     divElement = document.querySelector(".box");

//     elemHeight = divElement.offsetHeight;

//     document.querySelector(".output").textContent
//         = elemHeight + "px";
// }
const mPlay = () => {
    percent = audio.currentTime / audio.duration * 100;
    // console.log(percent)
    // console.log( percent, 100-percent)
    // slider.style.background = `linear-gradient(to right, #ffffff ${percent}%, #555 ${percent}%)`
    // slider.style.background = `linear-gradient(to right, #ffffff 30%, #555 70%)`

    slider.value = audio.currentTime;
    let imgwave = document.getElementById('wave-gif')
    lyricsplace.scrollTop = scrollby + 3;
    scrollby++;
    // lyricsplace.scrollLeft =  audio.currentTime;

    // if(imgwave){
    //     console.log(imgwave.parentNode)
    //     imgwave.parentNode.style.cssText = `
    //     position:static;
    //     `;
    //     imgwave.remove();

    // }
    if (audio.currentTime == audio.duration) {
        audio.currentTime = 0
        percent = audio.currentTime / audio.duration * 100;
        slider.style.background = `linear-gradient(to right, #ffffff ${percent}%, #555 ${percent}%)`
        slider.value = audio.currentTime;

        imgpauseplay.src = './assets/play_arrow.png'
        imgwave.parentNode.style.cssText = `
        position:static;
        `;
        // songs.scrollLeft += btn.id === 'left' ? -songwidth : songwidth;

        imgwave.remove();
        changesong('next');
    }
}

// function mPlay() { dur.value = aud.currentTime }
const lyricsbutton = document.getElementById('lyricsbutton');
let lyricspara = document.getElementById('lyrics-para')
lyricspara.innerHTML = `<pre>${songLyrics}</pre>`;

const showLyrics = () => {
    if (lyricsscreen.style.display == 'block') {
        lyricsscreen.style.display = 'none'
        lyricsbutton.innerHTML = 'Show Lyrics';
        lyricsbutton.style.cssText = `
        border: none;
        padding: 6px 16px;
        border-radius: 8px;
        background: #C01A20;
        color: #FFF;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 500;
        line-height: 150%;
        `;
    } else {
        lyricsscreen.style.display = 'block'
        lyricsbutton.innerHTML = 'Hide Lyrics';
        lyricsbutton.style.cssText = `
        border: none;
        padding: 6px 16px;
        border-radius: 8px;
        background: #FFF;
        color: #C01A20;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 500;
        line-height: 150%;
        `;
        lyricsplaceheight = lyricsplace.offsetHeight
        console.log(lyricsplaceheight)

    }
}

