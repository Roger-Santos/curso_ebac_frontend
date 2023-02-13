$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const textoTarefa = $('#texto-tarefa').val();

        console.log(textoTarefa);

        const novoItem = $('<li></li>');
        $(`<p>${textoTarefa}</p>`).appendTo(novoItem);
        novoItem.appendTo('ul');

        $('#texto-tarefa').val('');
    });

    $("#list").on("click", "li", function(){
        $(this).css({
            textDecoration: 'line-through'
        });
    });
});