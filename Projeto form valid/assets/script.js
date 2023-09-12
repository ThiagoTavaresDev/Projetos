// errors
const error_name = document.querySelector('#error-name')
const error_number = document.querySelector('#error-number')
const error_email = document.querySelector('#error-email')
const error_message = document.querySelector('#error-message')
const error_submit = document.querySelector('#error-submit')
//counter
const counter = document.querySelector('#counter')
// icon
const icon = document.querySelector('#check')
// inputs 
const input_name = document.querySelector('#input-name')
const input_email = document.querySelector('#input-email')
const input_number = document.querySelector('#input-number')
const message_area = document.querySelector('#message-area')
const button = document.querySelector('#submit')


// functions callback

function handdleName (){
    if(input_name.value.length == 0){
        error_name.innerHTML = 'Nome inválido'
        return false
    }
    if(!input_name.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        error_name.style.display = 'block'
        error_name.innerHTML = 'Insira seu nome completo'
        return false
    }
    else{
        error_name.style.display = 'none'
        return true
    }
}

function handdleNumber(){
    if(input_number.value.length == 0){
        error_number.innerHTML = 'Telefone inválido'
        return false
    }
    if(input_number.value.length !== 9){
        error_number.style.display = 'block'
        error_number.innerHTML = 'Precisa conter 9 digitos'
        return false
    }
    if(!input_number.value.match(/^[0-9]{9}/)){
        error_number.style.display = 'block'
        error_number.innerHTML = 'Precisa conter 9 digitos'
        return false
    }
    else{
        error_number.style.display = 'none'
        return true
    }

}
function handdleEmail(){
    if(input_email.value.length == 0 )
    {   
        error_email.innerHTML = 'Email inválido'
        return false
    }
    if(!input_email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        error_email.style.display = 'block'
        error_email.innerHTML = 'Ex: Th@gmail.com'
        return false
    }
    else{
        error_email.style.display = 'none'
        return true
    }

}
function handdleArea(){
    const contador = 20
    let decremento = contador - message_area.value.length
    if(decremento > 0){
        counter.innerHTML = decremento + ' Texto inválido'
        counter.style.display = 'block'
        error_message.style.display = 'block'
        return false
    }
    else{
    error_message.style.display = 'none'
    counter.style.display = 'none'
    return true
    }

}
function handdleButton(){
    if(!handdleName() || !handdleNumber() || !handdleEmail() || !handdleArea()){
        error_submit.style.display = 'block'
        return false
    }
    else{
        icon.style.display = 'block'
        return true
    }


}
// addEventListeners
input_name.addEventListener('keyup',handdleName)
input_number.addEventListener('keyup',handdleNumber)
input_email.addEventListener('keyup',handdleEmail)
message_area.addEventListener('keyup',handdleArea)
button.addEventListener('click',handdleButton)