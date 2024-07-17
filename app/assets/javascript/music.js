  function musicPlay() {
        var audio = document.getElementById(&quot;audioElement&quot;);
        var playButton = document.getElementById(&quot;rahPlayButton&quot;);
        var pauseButton = document.getElementById(&quot;rahPauseButton&quot;);

        if (audio.paused) {
            audio.play();
            playButton.classList.add(&quot;hidden&quot;);
            pauseButton.classList.remove(&quot;hidden&quot;);
        } else {
            audio.pause();
            playButton.classList.remove(&quot;hidden&quot;);
            pauseButton.classList.add(&quot;hidden&quot;);
        }
    }
