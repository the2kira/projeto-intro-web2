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
        concluida: false
    },

    {
        nome: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numeroDeAlunos: 200,
        periodo: "integral",
        concluida: false
    },

    {
        nome: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroDeAlunos: 180,
        periodo: "noturno",
        concluida: true
    },

    {
        nome: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numeroDeAlunos: 80,
        periodo: "integral",
        concluida: false
    },

    {
        nome: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numeroDeAlunos: 200,
        periodo: "noturno",
        concluida: true
    },

    {
        nome: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroDeAlunos: 100,
        periodo: "integral",
        concluida: true
    },

    {
        nome: "Elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numeroDeAlunos: 200,
        periodo: "noturno",
        concluida: true
    },

    {
        nome: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numeroDeAlunos: 90,
        periodo: "integral",
        concluida: false
    },
]


const estudantes = [
    {
        nome: "Chris Evans",
        turma: "Hipátia",
        curso: ["JavaScript", "HTML e CSS", "APIsRest"],
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

// Função de busca do Curso com FIND

const buscarCurso=(nomeCurso)=> {
    let procurarCurso = cursos.find(procurar => procurar.curso.toLowerCase() === nomeCurso.toLowerCase())

    if(procurarCurso){
        return procurarCurso
    } return `Curso não encontrado`
}

// Função buscar estudante com STARTS WITH


    const buscarEstudante=(nomeEstudante)=> {
    
        for(let i of estudantes){
        if(i.nome.toLowerCase().startsWith(nomeEstudante.toLowerCase())){
            return i
        }
        }
        return `Estudante não encontrado`
}

// Função buscar Turma com FILTER


const buscarTurma=(nomeTurma)=> {
    const filtrarTurma = turmas.filter(turmaProcurada => turmaProcurada.nome.toLowerCase() === nomeTurma.toLowerCase())
    // Filtra o nome da turma e coloca dentro de uma variável, essa variável vira um array com o resultado da pesquisa

    filtrarTurma.length > 0 ? console.log(filtrarTurma) : console.log('Turma não encontrada')
    // If Ternário, se o tamanho da variável filtrar turma for maior que 0, é porque entrou a turma pesquisada, se não, não existe a turma pesquisada
}

// Função para matricular novos estudantes

function matricularEstudante(nome,curso,turma,nParcelas){
    const novaMatricula = {
        nome,
        curso,
        turma,
        nParcelas
    }
     estudantes.push(novaMatricula)
     console.log(estudantes)
     console.log(
        ` Aluno Matriculado \n Nome: ${novaMatricula.nome} \n Curso: ${novaMatricula.curso} \n Turma: ${novaMatricula.turma} \n N Parcelas: ${novaMatricula.nParcelas}`)
     
}


// Função CALLBACK Adicionar ao Carrinho

const carrinhoCursos = []

const adicionarAoCarrinho = (buscarCurso)=>{
    const valorCurso = buscarCurso.valor
    carrinhoCursos.push(valorCurso)
    return carrinhoCursos

}

// Função CALLBACK Relatório do Estudante


const relatorioEstudante = (cb)=>{
    return ` Nome: ${cb.nome} \n Turma: ${cb.turma} \n Curso: ${cb.curso} \n Valor Total: ${cb.valor} \n Valor Parcela: ${cb.parcelas} \n N Parcelas: ${cb.nParcelas}`
}


// Função para saber se o aluno possui desconto


function parcelarCurso(numParcelas, carrinhoCursos) {
    let soma = 0
    let desconto = 0
   
    for(let i in carrinhoCursos){
        soma += carrinhoCursos[i]
    }

    let valorComDesconto = soma

    if(numParcelas <= 2){
        desconto = 0.2
        valorComDesconto = soma - (soma * desconto)
        console.log(valorComDesconto)
        console.log(`O valor do pagamento é de R$${valorComDesconto}. Foi concedido desconto de 20%`)
    }

    switch(carrinhoCursos.length){
        case 3:
            console.log(`O valor do pagamento é de ${valorComDesconto * 0.85} Foi concedido desconto de 15%`)
        break

        case 2:
            console.log(`O valor do pagamento é de R$${valorComDesconto * 0.90} Foi concedido desconto de 10%`)
        break
}
} 


adicionarAoCarrinho(buscarCurso('JavaScript'))
adicionarAoCarrinho(buscarCurso('HTML e CSS'))
parcelarCurso(2, carrinhoCursos)