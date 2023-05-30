$(document).ready(function(){
    $('header button').click(function(){
        console.log("Expandindo form...");
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function(){
        console.log("Contraindo form...");
        $('form').slideUp();
    });

    $('form').on('submit', function(e){
        console.log("submit");
        e.preventDefault();

        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>        
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    });
});