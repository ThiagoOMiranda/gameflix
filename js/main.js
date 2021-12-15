/* Animação na barra de navegação */

window.onscroll = function() {
    let distanceScrolled = document.documentElement.scrollTop;
    if (distanceScrolled > 0) {
        document.getElementById("header").className = "navbar-mod";
        vidCover[1].pause();
        vidCover[1].currentTime = 0;
        fly.style.display = "none";
        // document.getElementById("header").style.background = "rgb(34, 2, 66)";
    } else {
        document.getElementById("header").className = "navbar";
        // document.getElementById("header").style.background = "linear-gradient(rgb(34, 2, 66), rgba(255, 255, 255, 0))";
    }
    // console.log("Scrolled: " + distanceScrolled);
}

/* Animação do caret do ícone de usuário */

let uMenu = document.getElementsByClassName("user-menu")[0];

uMenu.onmouseover = function() {
    // function hover() {
    // document.getElementById("drip").style.transform = "rotate(180deg)";
    document.getElementsByClassName("fa-caret-down")[1].style.transform = "rotate(180deg)";
}

uMenu.onmouseout = function() {
    // function reHover() {
    // document.getElementById("drip").style.transform = "rotate(0)";
    document.getElementsByClassName("fa-caret-down")[1].style.transform = "rotate(0)";
}

/* Animação da barra de busca */

let boxOne = document.getElementsByClassName("search-box")[0],
    barOne = document.getElementsByClassName("search-bar")[0],
    inputOne = document.getElementById("input-search");

window.addEventListener('click', function(e) {
    if (document.getElementById("lupa").contains(e.target)) {
        boxOne.classList.toggle("search-box-focused");
        barOne.classList.toggle("search-bar-focused");
        inputOne.focus();
    } else {
        boxOne.classList.remove("search-box-focused");
        barOne.classList.remove("search-bar-focused");
    }
})

/* Animação da logo do destaque e troca entre capa e vídeo */

// playBtn = document.getElementById("play")

let infoText = document.getElementById("info-text"),
    playSign = document.getElementById("play-sign"),
    playTrailer = document.getElementById("play-Trailer"),
    mainGame = document.getElementsByClassName("main-game-logo"),
    // mainGame = document.getElementById("main-game"),
    // vidCover = document.getElementById("gvideo"),
    vidCover = document.getElementsByClassName("vid-cover"),
    imgCover = document.getElementsByClassName("img-cover"),
    // imgCover = document.getElementById("main-cover"),
    playBtn = document.getElementById("play");

playBtn.addEventListener("click", function() {

    if (infoText.classList.contains("visuallyhidden")) {
        vidCover[0].classList.toggle("hidden");
        imgCover[0].classList.toggle("hidden");
        playSign.classList.add("fa-play")
        playSign.classList.remove("blink", "fa-pause");
        playTrailer.innerHTML = "Trailer";
        vidCover[0].pause();
        vidCover[0].currentTime = 0;
        // vidCover.load();
        mainGame[1].style.transform = "scale(100%)", transitionDuration = "2s";
        // mainGame.style.transitionDuration = "2s";
        setTimeout(function() {
            infoText.classList.remove("visuallyhidden");
        }, 1000);

    } else {

        infoText.classList.add("visuallyhidden");
        mainGame[1].style.transform = "scale(65%) translateY(8.5vw)";
        mainGame[1].style.transitionDuration = "2s";
        vidCover[0].classList.toggle("hidden");
        imgCover[0].classList.toggle("hidden");
        playSign.classList.add("blink", "fa-pause");
        playSign.classList.remove("fa-play");
        playTrailer.innerHTML = "Pausar";
        vidCover[0].play();
        vidCover[0].onended = function() {
            vidCover[0].classList.toggle("hidden");
            imgCover[0].classList.toggle("hidden");
            mainGame[1].style.transform = "scale(100%)";
            mainGame[1].style.transitionDuration = "2s";
            playSign.classList.add("fa-play")
            playSign.classList.remove("blink", "fa-pause");
            playTrailer.innerHTML = "Trailer";
            setTimeout(function() {
                infoText.classList.remove("visuallyhidden");
            }, 1000);
        }
    }

}, false);


/*Atribui a função "mudo" para o vídeo principal*/

let volMute = document.getElementById("vol-mute"),
    mute = document.getElementById("mute");

mute.addEventListener("click", function() {
    volMute.classList.toggle("fa-volume-mute");
    if (vidCover[0].muted == false) {
        vidCover[0].muted = true;

    } else {
        vidCover[0].muted = false;
    }
}, false);


/*Carrega o vídeo ao abrir o menu "pop-up"*/

let fly = document.getElementsByClassName("fly-board")[0],
    info = document.getElementById("info");


info.addEventListener("click", function() {
    if (imgCover[1].classList.contains("hidden")) {
        vidCover[1].play();
        vidCover[1].currentTime = 13;
        fly.style.display = "flex";
        vidCover[1].onended = function() {
            vidCover[1].classList.toggle("hidden");
            imgCover[1].classList.toggle("hidden");
        }
    } else {
        vidCover[1].pause();
        vidCover[1].currentTime = 0;
        vidCover[1].classList.add("hidden");
        imgCover[1].classList.remove("hidden");
    }
});

/*Atribui a função "mudo" para o vídeo da Janela*/

let volMute2 = document.getElementById("vol-mute2"),
    mute2 = document.getElementById("mute2");

mute2.addEventListener("click", function() {
    volMute2.classList.toggle("fa-volume-mute");
    if (vidCover[1].muted == false) {
        vidCover[1].muted = true;

    } else {
        vidCover[1].muted = false;
    }
}, false);

/* Atribui a função fechar no botão da Janela*/

let close = document.getElementById("close");

close.addEventListener("click", function() {
    if (fly.style.display != "none") {
        vidCover[1].pause();
        vidCover[1].currentTime = 0;
        fly.style.display = "none";
    }
}, false);

/* Captura o tamanho atual da Janela */

let w, h;

function displayWindowSize() {
    w = document.documentElement.clientWidth;
    h = document.documentElement.clientHeight;
    // console.log("Width: " + w + ", " + "Height: " + h)
};

window.addEventListener("resize", displayWindowSize);

displayWindowSize();
// console.log(displayWindowSize);


/* Define a posição o background */

let bgd = document.getElementById("back"),
    // flyBgd = document.getElementById("fly-back"),
    mainCover = document.getElementById("main-cover");

function backgroundSize() {
    // console.log(mainCover.clientHeight);
    // console.log((h / 10) + "px");
    // flyBgd.style.top = (h / 20) + "px";
    bgd.style.top = (mainCover.clientHeight - (mainCover.clientHeight / 3.5)) + "px";
};

window.addEventListener("resize", backgroundSize);

backgroundSize();