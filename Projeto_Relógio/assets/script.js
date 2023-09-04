const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(() =>{
    const dataHoje = new Date()
    let horaAgora = dataHoje.getHours()
    let minutosAgora = dataHoje.getMinutes()
    let segundosAgora = dataHoje.getSeconds()
    
    if(horaAgora < 10) horaAgora = '0' + horaAgora
    if(minutosAgora < 10) minutosAgora = '0' + minutosAgora
    if(segundosAgora < 10) segundosAgora = '0' + segundosAgora
    horas.textContent = horaAgora
    minutos.textContent = minutosAgora
    segundos.textContent = segundosAgora

})