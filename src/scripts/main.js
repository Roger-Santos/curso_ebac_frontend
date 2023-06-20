let lista = new Set();
let numeroMaximo;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botao-sortear').disabled = true;
    document.getElementById('botao-finalizar').disabled = true;


    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();

        console.log("Iniciando sorteio");        

        document.getElementById('botao-iniciar').disabled = true;
        document.getElementById('botao-sortear').disabled = false;
        document.getElementById('botao-finalizar').disabled = false;

        numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);
    })

    document.getElementById('botao-sortear').addEventListener('click', function(){
        console.log("Sorteando número");

        let numeroAleatorio;   
        let numeroPermitido = false;

        if(lista.size < numeroMaximo) {
            let numeroAleatorio;   
            let numeroPermitido = false;

            while(!numeroPermitido) {
                numeroAleatorio = Math.random() * numeroMaximo;
                numeroAleatorio = Math.floor(numeroAleatorio) + 1;
                numeroPermitido = !lista.has(numeroAleatorio);
            }

            lista.add(numeroAleatorio);
            let html = document.getElementById('lista-sorteados').innerHTML;
            document.getElementById('lista-sorteados').innerHTML = html + "<li>" + numeroAleatorio + "</li>";

            if(lista.size == numeroMaximo) {
                document.getElementById('botao-sortear').disabled = true;
                console.log("Todos os números foram sorteados");
            }

        }else {
            console.log("Não há números a serem sorteados");
        }
    })

    document.getElementById('botao-finalizar').addEventListener('click', function(){
        console.log("Finalizando sorteio");

        document.getElementById('botao-iniciar').disabled = false;
        document.getElementById('botao-sortear').disabled = true;
        document.getElementById('botao-finalizar').disabled = true;
        document.getElementById('lista-sorteados').innerHTML = "";

        lista = new Set();
    })

})