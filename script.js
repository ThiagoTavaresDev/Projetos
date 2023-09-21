const inputDia = document.querySelector('#dias')
const inputMes = document.querySelector('#meses')
const inputAno = document.querySelector('#anos')
const simbol = document.querySelector('.simbol')
const spanDays = document.querySelector('#days')
const spanMonths = document.querySelector('#months')
const spanYears = document.querySelector('#years')


const realTime = new Date()
const days = realTime.getDate()
const months = realTime.getMonth()
const years = realTime.getFullYear()
console.log(months)
console.log(years)
console.log(days)
simbol.addEventListener('click', () =>{
    const yourDay = days - inputDia.value
    const yourMonth = 1 + months - inputMes.value
    const yourYear = years - inputAno.value

    spanDays.textContent = yourDay
    spanMonths.textContent = yourMonth
    spanYears.textContent = yourYear


})

