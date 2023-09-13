// aqui criamos o objeto que carregará com ele as keys com os seus respectivos sons
const objetoFuncionalSons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}
// essa função é responsavel por criar as nossas divs, já adicionando o estilo através da classe que se encontra no css
// também seleciona o container existente no html e coloca como filho a propria div criada, esta que contem o texto passado através do parâmetro text
// e o seu respectivo id também se da pelo o text
function creatDiv(text){
    const container = document.querySelector('.container')
    const div = document.createElement('div')
    div.classList.add('key')
    div.textContent = text
    div.id = text
    container.appendChild(div)
}
// essa funcao é responsável por adicionar o efeito da classe active, esta que contém a transição etc, ela contém o toggle porém clicar duas vezes
// ou repetir a tecla novamente não é o que queremos para tirar o efeito
function addEffect(letra){
    document.getElementById(letra).classList.toggle('active')

}
// essa função remove o efeito dado pela a outra função assim que é acionada, ela somente espera a transição acabar
function removeEffect(letra){
    const div = document.getElementById(letra)
    const removeActive = () => div.classList.remove('active')
    div.addEventListener('transitionend',removeActive)
}
// essa função é responsável por pegar todas as keys e através do forEach criar cada div para sua respectiva chave
function show(objetoFuncionalSons){
   Object.keys(objetoFuncionalSons).forEach(creatDiv) // Object.keys | pega as chaves do objeto exemplo 'A':
}
// função responsavel por acionar o som, ela basicamente cria uma constante audio do objeto Audio que sempre irá reproduzir a sua letra que contém
// o respectivo som dela, ex: 'A': 'boom.wav'
function playSound(letra){
    const audio = new Audio(`assets/sounds/${objetoFuncionalSons[letra]}`)
    audio.play()
}
// função responsável por ativar e verificar o tipo de evento que esta acontecendo, sendo click ela pega o id do elemento clicado, sendo keyup 
// ela pega a chave desse evento e coloca em maiusculo, ela também verifica se o click ou a tecla fazem parte do objeto se sim ela aciona com sucesso.
function activeDiv(event){
    const letra = event.type == 'click' ? event.target.id : event.key.toUpperCase()

    const letraPermitida = objetoFuncionalSons.hasOwnProperty(letra)

    if(letraPermitida){
        addEffect(letra)
        playSound(letra)
        removeEffect(letra)
    }
}
// aqui ativamos a função show para usar como parametro o nosso objeto, em seguida temos escutadores que ativarão suas funções de callback assim que 
// o evento ocorra no elemento especifico determinado.
show(objetoFuncionalSons)
document.getElementById('container').addEventListener('click',activeDiv)

window.addEventListener('keyup',activeDiv)