let songs = [
    "songs/song1.mp3",
    "songs/song2.mp3"
];

let titles = [
    "Song 1",
    "Song 2"
];

let index = 0;
let audio = document.getElementById("audio");
let title = document.getElementById("title");
let progress = document.getElementById("progress");
let volume = document.getElementById("volume");

function loadSong() {
    audio.src = songs[index];
    title.innerText = titles[index];
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    index = (index + 1) % songs.length;
    loadSong();
    audio.play();
}

function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
}

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

loadSong();