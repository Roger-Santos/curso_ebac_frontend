$(document).ready(function(){$("header button").click(function(){console.log("Expandindo form..."),$("form").slideDown()}),$("#botao-cancelar").click(function(){console.log("Contraindo form..."),$("form").slideUp()}),$("form").on("submit",function(e){console.log("submit"),e.preventDefault();var e=$("#endereco-imagem-nova").val(),o=$('<li style="display: none"></li>');$(`<img src="${e}" />`).appendTo(o),$(`
            <div class="overlay-imagem-link">
                <a href="${e}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>        
        `).appendTo(o),$(o).appendTo("ul"),$(o).fadeIn(1e3),$("#endereco-imagem-nova").val("")})});