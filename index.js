let progress = document.getElementById("progress");
        let song = document.getElementById("song");
        let iconCtrl = document.getElementById("iconCtrl");

        song.onloadedmetadata = function () {
            progress.max = song.duration;
            progress.value = song.currentTime;
        }


        // check icons is playing or pause
        function playPause() {
            if (iconCtrl.classList.contains("fa-pause")) {
                song.pause();
                iconCtrl.classList.remove("fa-pause");
                iconCtrl.classList.add("fa-play");
            }
            else {
                song.play();
                iconCtrl.classList.add("fa-pause");
                iconCtrl.classList.remove("fa-play");

            }
        }

        if (song.play()) {
            setInterval(() => {
                progress.value = song.currentTime;
            }, 500)
        }

        progress.onchange = function () {
            song.play();
            song.currentTime = progress.value;
            iconCtrl.classList.add("fa-pause");
            iconCtrl.classList.remove("fa-play");
        }