const input = document.querySelector('#senha')
const span = document.querySelector('#forca')
const mensagem = document.querySelector('p')
input.addEventListener('input', () =>{
    if(input.value.length <= 0){
        mensagem.style.display = 'none'
        input.style.border = '1px solid black'
    }

  else if(input.value.length > 0 && input.value.length < 4){
    mensagem.style.display = 'block'
    span.innerHTML = 'Fraca'
    span.style.color = 'crimson'
    input.style.border = '1px solid crimson'
   }
   else if(input.value.length > 6 && input.value.length <= 8){
    span.innerHTML = 'Mediana'
    span.style.color = 'yellow'
    input.style.border = '1px solid yellow'
   }
   else if(input.value.length > 9 && input.value.length <= 10){
    span.innerHTML = 'Forte'
    span.style.color = '#77dd77'
    input.style.border = '1px solid #77dd77'
   }


   console.log(input.value.length)
})
