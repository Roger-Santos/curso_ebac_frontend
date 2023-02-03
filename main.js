const form = document.getElementById('form-valores');
const inputA = document.getElementById('campoA');
const inputB = document.getElementById('campoB');

let formValido = false;

function validaValores(_valorA, _valorB){
    return _valorB > _valorA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const mensagemSucesso = "O valor do campo A: " + "<b>" + campoA.value + "</b>" + " é menor que o valor do campo B: " + "<b>" + campoB.value + "</b>"; 

    formValido = validaValores(campoA.value, campoB.value);
        
    if(formValido){
        document.querySelector('.error-message').style.display = 'none';
        const containerMessagemSucesso = document.querySelector('.success-message');
        containerMessagemSucesso.innerHTML = mensagemSucesso;
        containerMessagemSucesso.style.display = 'block';
    }else{
        document.querySelector('.success-message').style.display = 'none';
        inputA.style.border = '1px solid red';
        inputB.style.border = '1px solid red'; 
        document.querySelector('.error-message').style.display = 'block';
    }    
})

inputA.addEventListener('keyup', function(e){
    formValido = validaNome(e.target.value);

    if(!formValido){
        nomeBeneficiario.classList.add('error')
        document.querySelector('.error-message').style.display = 'block';
    }else{
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none';
    }
});