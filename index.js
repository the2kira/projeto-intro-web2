const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "Aprenda a estilizar e personalizar sua página na web!",
        duracao: "30 dias",
        valor: 500

    },

    {
        curso: "JavaScript",
        descricao: "Tenha seu primeiro contato com uma linguagem de programação",
        duracao: "2 meses",
        valor: 900

    },
    
    {
        curso: "APIsRest",
        descricao: "Entre mais a fundo da programação avançada",
        duracao: "6 meses",
        valor: 2000

    }
    
]

const turmas = [
    {
        nome: "Hipátia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numeroDeAlunos: 150,
        periodo: "noturno",
        concluida: "Não"
    },

    {
        nome: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numeroDeAlunos: 200,
        periodo: "integral",
        concluida: "Não"
    },

    {
        nome: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroDeAlunos: 180,
        periodo: "noturno",
        concluida: "Sim"
    },

    {
        nome: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numeroDeAlunos: 80,
        periodo: "integral",
        concluida: "Não"
    },

    {
        nome: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numeroDeAlunos: 200,
        periodo: "noturno",
        concluida: "Sim"
    },

    {
        nome: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroDeAlunos: 100,
        periodo: "integral",
        concluida: "Sim"
    },

    {
        nome: "Elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numeroDeAlunos: 200,
        periodo: "noturno",
        concluida: "Sim"
    },

    {
        nome: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numeroDeAlunos: 90,
        periodo: "integral",
        concluida: "Não"
    },
]


const estudantes = [
    {
        nome: "Chris Evans",
        turma: "Hipátia",
        curso: ["JavaScript", " HTML e CSS", " APIsRest"],
        valor: cursos[0].valor + cursos[1].valor + cursos[2].valor,
        nParcelas: 5,
        desconto: true,
        parcelas: 100
    },

    {
        nome: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: cursos[2].valor,
        nParcelas: 4,
        desconto: false,
        parcelas: 500
    },

    {
        nome: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: cursos[1].valor,
        nParcelas: 1,
        desconto: true,
        parcelas: null
    }
    
]



////////////////// Função e variáveis para criar card das turmas

const divDosCards = document.createElement("div")
const container = document.getElementById("container")


const criaCard = (turmasBuscadas) => {

    const cardsTurmas = document.getElementById('cards-turmas')
    cardsTurmas.innerHTML = ""

    const cards = turmasBuscadas.map((cadaTurmaBuscada) =>{
        return(`<div class="turmas">
        <h1 class="titulo">${cadaTurmaBuscada.nome}</h1>
        <p><b>Curso: </b>${cadaTurmaBuscada.curso}</p>
        <p><b>Início: </b>${cadaTurmaBuscada.inicio}</p>
        <p><b>Término: </b>${cadaTurmaBuscada.termino}</p>
        <p><b>Numero de Alunos: </b>${cadaTurmaBuscada.numeroDeAlunos}</p>
        <p><b>Período: </b>${cadaTurmaBuscada.periodo}</p>
        <p><b>Concluído: </b>${cadaTurmaBuscada.concluida}</p>
        </div>`)
    })

    cardsTurmas.innerHTML = cards

    }

////////////////// Função de buscar turma utilizando o filter e o startswith, aparecendo então toda turma que começa com o começo digitado

const botaoBuscarTurma = () => {   
const inputTurma = document.getElementById('buscar').value.toLowerCase()
console.log(inputTurma)

const turmaFiltrada = turmas.filter(cadaTurma => {
    if(cadaTurma.nome.toLowerCase().startsWith(inputTurma.toLowerCase())){
        return cadaTurma
    }
})
return turmaFiltrada.length >= 0 ? criaCard(turmaFiltrada) : criaCard(turmas)

}

////////////////// Função para matricular um estudante novo, e adicioná-lo como um novo objeto ao Array Estudantes

const matricularEstudante = () => { 
 
const inputNome = document.getElementById('nomeMatricula').value
const inputCurso = document.getElementById('cursoMatricula').value
const inputTurma = document.getElementById('turmaMatricula').value
const inputNParcelas = document.getElementById('nParcelasMatricula').value
const resultado2 = document.getElementById("display-none")
resultado2.innerHTML = `<h1>Aluno matriculado</h1>
<img src="./midia/sucess.png" alt="sucesso">
<div id="aluno-matriculado">
<p>Nome: ${inputNome}</p>
<p>Curso: ${inputCurso}</p>
<p>Turma: ${inputTurma}</p>
<p>Parcelado em: ${inputNParcelas}x</p>
</div>
`

const novoEstudante = {
    nome: inputNome,
    turma: inputTurma,
    curso: inputCurso,
    nParcelas: inputNParcelas,
}


estudantes.push(novoEstudante)
}

////////////////// Função para buscar Estudante com qualquer parte do nome, usando o INCLUDES

const buscarEstudante= () => {
        
    const inputAluno = document.getElementById("nomeRelatorio").value.toLowerCase()
 
    const alunoFiltrado = estudantes.filter(cadaAluno => {
        if(cadaAluno.nome.toLowerCase().includes(inputAluno.toLowerCase())){
            return cadaAluno
        }
    })
 
    return alunoFiltrado
}

////////////////// Função ghost de Mensagem Recebida

const botaoContato = () => {
    
    const mensagemRecebida = `<div class="confirmacao-de-envio">
    <span>Mensagem recebida <br>com sucesso<br></span> <img src="./midia/sucess.png" alt="sucesso"></img>
   </div>`
   
  return document.getElementById('display-none-2').innerHTML = mensagemRecebida
   
   }

////////////////// Função de relatório de um estudante já cadastrado, recebe como parâmetro o callback da função BUSCAR ESTUDANTE

const relatorioEstudante = (buscarEstudante)=>{
    const retorno = `<p>Nome: ${buscarEstudante[0].nome} <br> 
    Turma: ${buscarEstudante[0].turma} <br> 
    Curso: ${buscarEstudante[0].curso} <br> 
    Valor Total: ${buscarEstudante[0].valor} <br> 
    Valor Parcela: ${buscarEstudante[0].parcelas} <br> 
    N Parcelas: ${buscarEstudante[0].nParcelas}</p>`
    
    document.getElementById('relatorioRetornado').innerHTML = retorno
}

////////////////// Função para buscar o curso pelo nome exato

const buscarCurso = (nomeCurso) => {
    
    return cursos.find((cadaCurso) => cadaCurso.curso.toLowerCase() === nomeCurso.toLowerCase())
}

////////////////// Variáveis e Função para adicionar um curso ao carrinho
////// Poderia ter usado como callback a função acima, porém, tentei fazer de uma forma mais complexa

const carrinhoCursos = []
const carrinhoNomes = []

const adicionarAoCarrinho = () =>{

const inputCurso = document.getElementById("CursoFinanceiro").value;
    let soma = 0
    let nomeCursos = " "
    const resultado = document.getElementById('valorRetornado')
    const cursoSelecionado = cursos.find(curso => curso.curso.toLowerCase() === inputCurso.toLowerCase());
    console.log(cursoSelecionado)
    if (!cursoSelecionado) {
        resultado.innerHTML = `<div class="result">Curso não encontrado.</div>`
    }
    if(cursoSelecionado){
        soma += cursoSelecionado.valor
        nomeCursos += cursoSelecionado.curso
        carrinhoCursos.push(soma)
        carrinhoNomes.push(nomeCursos)
        console.log(carrinhoNomes)
        resultado.innerHTML += `<div class="result">Curso ${cursoSelecionado.curso} foi adicionado ao carrinho.</div>`
        document.getElementById('adicionarCurso').innerHTML = `Adicionar outro curso`
    }
    
    document.getElementById("CursoFinanceiro").value = ""

}

////////////////// Função para calcular o desconto dos cursos adicionados ao carrinho 

const verValor = () => {
    let desconto = 0
    let valores = carrinhoCursos
    let valorTotal = valores.reduce((total, valor) => total + valor, 0)

    let nParcelas = document.getElementById('nParcelasFinanceiro').value
    let resultado2 = document.getElementById("valorRetornado")
    resultado2.innerHTML = ""

 
    if (carrinhoCursos.length >= 2) {
        switch (carrinhoCursos.length) {
            case 3:
                desconto = 0.15
                break;
            case 2:
                desconto = 0.10
                break;
            default:
                desconto = 0
                break;
        }
     }

     if (!nParcelas){
        desconto += 0.2
        nParcelas = 1
     }

     else if (nParcelas < 3 && nParcelas > 0) {
        desconto += 0.2
    }
    
    
    const valorFinal = valorTotal - (valorTotal * desconto)
    const valorParcela = valorFinal / nParcelas;
    


    if (carrinhoNomes.length === 0){
        return resultado2.innerHTML = `<div class="resultadoDesconto"><h2>Adicione um curso para calcular o valor final</h2>`
    }
    else if (carrinhoNomes.length === 1){
        return resultado2.innerHTML = `<div class="resultadoDesconto"><h1>Valor Total: R$${valorFinal}</h1><br>
        <p>Curso escolhido: ${carrinhoNomes}. <br> Desconto de ${(desconto * 100).toFixed(2)}% <br> Parcelas de ${nParcelas}x de R$${valorParcela}</p>`
    }
    else if (carrinhoNomes.length > 1){
        return resultado2.innerHTML = `<div class="resultadoDesconto"><h1>Valor Total: R$${valorFinal}</h1><br>
        <p>Cursos escolhidos: ${carrinhoNomes}. <br> Desconto de ${(desconto * 100).toFixed(2)}% <br> Parcelas de ${nParcelas}x de R$${valorParcela}</p>`
    }
}