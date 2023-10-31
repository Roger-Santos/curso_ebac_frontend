function JogadorFutebol(nome, idade, posicao) {
    let _nome = nome;
    let _idade = idade;
    let _posicao = posicao;
    let _habilidade = 0;

    this.setIdade = function(idade) {
        if(typeof idade === 'number') {
            _idade = idade;
        }
    } 

    this.getIdade = function() {
        return _idade;
    }

    this.getnome = function() {
        return _nome;
    }

    this.getPosicao = function() {
        return _posicao;
    }

    this.fazPasse = function() {
        let resultado = Math.floor(Math.random() * 10 + 1);

        if (resultado >= 5) {
            console.log("O jogador " + _nome + " acertou o passe.");
        } else {
            console.log("O jogador " + _nome + " errou o passe.");
        }
    }
}

function Goleiro(nome, idade) {
    JogadorFutebol.call(this, nome, idade, "Goleiro");

    this.fazDefesa = function() {
        let resultado = Math.floor(Math.random() * 10 + 1);

        if (resultado >= 2) {
            console.log("O goleiro " + nome + " defendeu o chute.");
        } else {
            console.log("O goleiro " + nome + " não defendeu o chute.");
        }
    }
}

function Atacante(nome, idade) {
    JogadorFutebol.call(this, nome, idade, "Atacante");

    this.chutaProGol = function() {
        let resultado = Math.floor(Math.random() * 10 + 1);

        if (resultado >= 7) {
            console.log("Gooooool do " + nome);
        } else {
            console.log("O jogador " + nome + " chutou pra foraaaa.");
        }
    }

}

const dudu = new Atacante("Dudu", 36);
const veiga = new Atacante("Rafael Veiga", 28);
const weverton = new Goleiro("Weverton", 33);

dudu.fazPasse();
weverton.fazPasse();
weverton.fazDefesa();
dudu.chutaProGol();
veiga.fazPasse();
