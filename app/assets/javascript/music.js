var playButton = document.getElementById("rahPlayButton");
    var pauseButton = document.getElementById("rahPauseButton");
    var audio = document.getElementById("audioElement");
    
    var playlist = [
        "https://www.blogseba.com/app/assets/groove-day.mp3",
        "https://www.blogseba.com/app/assets/tumi-hakim-hoiya-hukum-koro.mp3",
        "https://www.blogseba.com/app/assets/amar-sonar-bangla.mp3"
    ];

    function getRandomSong() {
        var randomIndex = Math.floor(Math.random() * playlist.length);
        return playlist[randomIndex];
    }

    function musicPlay() {
        if (audio.paused) {
            audio.src = getRandomSong();
            audio.play();
            playButton.classList.add("hidden");
            pauseButton.classList.remove("hidden");
        } else {
            audio.pause();
            playButton.classList.remove("hidden");
            pauseButton.classList.add("hidden");
        }
    }
