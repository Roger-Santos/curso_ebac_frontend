$(document).ready(function(){


    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00.000-000');

    $('form').validate({
        errorClass: 'errors',
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo',
            email: 'Por favor, insira um e-mail válido',
            telefone: 'Por favor, insira um telefone para contato',
            cpf: 'Por favor, insira seu número de CPF'
        },
        submitHandler: function(form) {
            form.submit();
        }
    })
});