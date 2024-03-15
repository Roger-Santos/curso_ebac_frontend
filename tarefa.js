//Criação de um array vazio
const notasDaSala = [];

//Função para cadastrar a nota e o nome de um aluno
function cadastrarNota(nomeDoAluno, notaDoAluno) {
    return {
        nome: nomeDoAluno,
        nota: notaDoAluno
    }
}

//Retorna alunos que tiraram nota maior ou igual a 6
function verificaAprovados(item) {
    return item.nota >= 6;
}

//Cadastrando alunos
notasDaSala.push(cadastrarNota('Roger', 10))
notasDaSala.push(cadastrarNota('Aline', 3))
notasDaSala.push(cadastrarNota('Thiago', 5))
notasDaSala.push(cadastrarNota('Matheus', 8))
notasDaSala.push(cadastrarNota('Jessica', 9))
notasDaSala.push(cadastrarNota('William', 4))

//Verificando alunos com nota maior igual a 6
console.log(notasDaSala.filter(verificaNota));