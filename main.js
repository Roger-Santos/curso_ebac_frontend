const form = document.getElementById('form-valores');
const inputA = document.getElementById('campoA');
const inputB = document.getElementById('campoB');

let formValido = false;

form.addEventListener('submit', function(e){
    e.preventDefault();

    formValido = validaValores(inputA.value, inputB.value);

    console.log(inputA.value);
    console.log(inputB.value);

    if(formValido){
        removeErro();
        exibeSucesso();
    }else{
        removeSucesso();
        exibeErro();
    }
});

inputA.addEventListener('keyup', function(e){
    removeTodasMensagens();
});

inputB.addEventListener('keyup', function(e){
    removeTodasMensagens();
});

function validaValores(_valorA, _valorB){
    return _valorB > _valorA;
}

function exibeErro(){
    inputA.classList.add('error');
    inputB.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
}

function exibeSucesso(){
    const mensagemSucesso = "Sucesso! O valor do campo A: " + "<b>" + inputA.value + "</b>" + " é menor que o valor do campo B: " + "<b>" + inputB.value + "</b>";
    const containerMessagemSucesso = document.querySelector('.success-message');
    containerMessagemSucesso.innerHTML = mensagemSucesso;
    containerMessagemSucesso.style.display = 'block';
}

function removeErro(){
    inputA.classList.remove('error');
    inputB.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
}

function removeSucesso(){
    document.querySelector('.success-message').style.display = 'none';
}

function removeTodasMensagens(){
    removeErro();
    removeSucesso();
}