// seleção de elementos fundamentais
const inputDia = document.querySelector('#dias')
const inputMes = document.querySelector('#meses')
const inputAno = document.querySelector('#anos')
const spanDays = document.querySelector('#days')
const spanMonths = document.querySelector('#months')
const spanYears = document.querySelector('#years')
const button = document.querySelector('button')

// seleção de elementos que serão estilizadores específicos
const errorSpanYear = document.querySelector('#errorYear')
const errorSpanMonth = document.querySelector('#errorMonth')
const errorSpanDay = document.querySelector('#errorDay')

// elementos que estão imersos na lógica
const realTime = new Date()
 currentDays = realTime.getDate()
let currentMonths = realTime.getMonth()
let currentYears = realTime.getFullYear()
const meses = [31,28,31,30,31,30,31,31,30,31,30,31]

// todos os comandos que serão executados após o click no ícone
button.addEventListener('click', (e) =>{

        const yourBirthDay = inputDia.value
        const yourBirthMonth = inputMes.value
        const yourBirthYear = inputAno.value
        if(yourBirthDay > currentDays){
            currentDays += meses[yourBirthMonth - 1] + 1
            
        }
        if(yourBirthMonth > currentMonths){
            currentYears += - 1
            currentMonths += 1 + Number(yourBirthMonth)
           
        }
        if(inputDia.value.length == 2 && inputMes.value.length == 2 && inputAno.value.length === 4) 
        {spanDays.textContent = currentDays - yourBirthDay
          
           
        }
        if(inputMes.value.length !== 0 && inputMes.value.length == 2 && inputAno.value.length === 4)
        { spanMonths.textContent = currentMonths - yourBirthMonth
           
           
        }
        if(inputAno.value.length !== 0 && inputMes.value.length == 2 && inputAno.value.length === 4) {
            spanYears.textContent = currentYears - yourBirthYear
           
           
        } 
        // função que verifica as condições extras e que implementa a estilização específica, ela támbem é executada após o click no button
    function verifyConditions(){
            if(inputDia.value > 31){
                errorSpanDay.style.display = 'block'
                console.log('dia invalido')
                errorSpanDay.textContent = 'Dia inválido'
                errorSpanDay.classList.add('span-field')
                inputDia.style.border = '1px solid #ff000f'
                
            }
            else{
                errorSpanDay.style.display = 'none'
                inputDia.style.border = '1px solid #00FF00'
            }
          
            if(inputMes.value > 12){
                errorSpanMonth.style.display = 'block'
                errorSpanMonth.textContent = 'Mês inválido'
                errorSpanMonth.classList.add('span-field')
                inputMes.style.border = '1px solid #ff000f'
                
            }
            else{
                errorSpanMonth.style.display = 'none'
                inputMes.style.border = '1px solid #00FF00'
            }
            if(inputMes.value.length !== 2  ){
                inputMes.style.border = '1px solid #ff000f'
                errorSpanMonth.style.display = 'block'
                errorSpanMonth.textContent = 'Ex: Mês 01'
                errorSpanMonth.classList.add('span-field')
              
        }
       
            if(inputDia.value.length !== 2){
           ('#errorMonth')
                errorSpanDay.style.display = 'block'
                errorSpanDay.textContent = 'Ex: Dia 01'
                errorSpanDay.classList.add('span-field')
                inputDia.style.border = '1px solid #ff000f'
           
            }
          
            if(inputAno.value.length !== 4 || inputAno.value > currentYears){
                errorSpanYear.style.display = 'block'
                errorSpanYear.textContent = 'Ano inválido'
                errorSpanYear.classList.add('span-field')
                inputAno.style.border = '1px solid #ff000f'
            
        }
            else{
                errorSpanYear.style.display = 'none'
                inputAno.style.border = '1px solid #00FF00'
        }
        
} verifyConditions()
spanYears = ''
spanMonths = ''
spanDays = ''
} )

