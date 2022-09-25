function fecharAlerta(){
    alerta.style.display = 'none'
    mainPage.style.display = 'block'

}

function ocultarMain(){
    mainPage.style.display = 'none'
}
  
const alerta = document.getElementById('alerta_interacao');
const mainPage = document.querySelector('main');
const btnFecharAlerta = document.querySelector('#btn_fechar_alerta');

if (alerta != null){
    ocultarMain()
}

btnFecharAlerta.addEventListener('click', fecharAlerta)

