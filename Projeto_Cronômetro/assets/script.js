const display = document.querySelector('h1')
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const reset = document.querySelector('#reset')
let segundos = 0
let minutos = 0
let horas = 0
let interval;

function play(){
    iniciar()
    interval = setInterval(iniciar,1000)
}
function doisDigitos(horario){
    if(horario < 10){
        horario = "0"+ horario
        return horario
    }
    else {
        return horario
    }
}

function iniciar(){
    segundos++
    if(segundos == 60){
        segundos = 0
        minutos++
    }
    if(minutos == 60){
        minutos = 0
        horas++
    }
    display.textContent = doisDigitos(horas) + ':' + doisDigitos(minutos) + ':' + doisDigitos(segundos)
}
function resetar(){
    clearInterval(interval)
    segundos = 0
    minutos = 0
    horas = 0
    display.textContent = '00:00:00'
}
function pausar() {
    clearInterval(interval)
  
}

start.addEventListener('click', play)
reset.addEventListener('click', resetar)
pause.addEventListener('click', pausar)


