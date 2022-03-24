function relogio() {
//criar horas em segundos
function getTimeOnSeconds(seconds) {
    const data = new Date(seconds * 1000);//seconds vem em ms, converter ms para s
    return data.toLocaleTimeString("pt-BR", {
        hour12: false, //transformar em formato 24hrs
        timeZone: "UTC" //timer começar no 00:00:00
    });
};


//como pegar eventos de click
const relogio = document.querySelector(".relogio");

let seconds = 0;
let timer;

function initializeClock() {
    //vai adicionar 1s a variável segundos
    timer = setInterval(function () {
        seconds++;
        relogio.innerHTML = getTimeOnSeconds(seconds);
    }, 1000);
}

document.addEventListener("click", function (e) {
    const el= e.target;

if (el.classList.contains("zerar")) {
    relogio.classList.remove("pausado")
    clearInterval(timer);
    relogio.innerHTML = "00:00:00"
    seconds = 0;
}

if (el.classList.contains("iniciar")) {
    relogio.classList.remove("pausado")
    clearInterval(timer);//se clicar masi de 1x, para não ter mais de 1 timer rodando, apenas um.
    initializeClock();
}

if (el.classList.contains("pausar")) {
    clearInterval(timer);
    relogio.classList.add("pausado")
}

});
}
relogio();


/* ****MODO TRADICIONAL ****
//criar horas em segundos
function getTimeOnSeconds(seconds) {
    const data = new Date(seconds * 1000);//seconds vem em ms, converter ms para s
    return data.toLocaleTimeString("pt-BR", {
        hour12: false, //transformar em formato 24hrs
        timeZone: "UTC" //timer começar no 00:00:00
    });
};


//como pegar eventos de click
const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let seconds = 0;
let timer;

function initializeClock() {
    //vai adicionar 1s a variável segundos
    timer = setInterval(function () {
        seconds++;
        relogio.innerHTML = getTimeOnSeconds(seconds);
    }, 1000);
}

iniciar.addEventListener("click", function (event) {
    relogio.classList.remove("pausado")
    clearInterval(timer);//se clicar masi de 1x, para não ter mais de 1 timer rodando, apenas um.
    initializeClock();
});

pausar.addEventListener("click", function (event) {
    clearInterval(timer);
    relogio.classList.add("pausado")
});

zerar.addEventListener("click", function (event) {
    relogio.classList.remove("pausado")
    clearInterval(timer);
    relogio.innerHTML = "00:00:00"
    seconds = 0;
}); */