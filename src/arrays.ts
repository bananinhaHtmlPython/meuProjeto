const alunos = [
    "joao", //índice = 0
    'rafaela', //índice = 1
    'breno', // índice = 2
    'Klyvia', // índice = 3
    'Davi' //índice = 4 (tamanho - 1)
]
//mostrar todo o array
//console.log(alunos)
//acessar umj elemento específico pelo índice
console.log('terceiro elemento: ', alunos[3])

//Obter a quantidade de elementos
console.log('tamanho: ', alunos.length)
//Obter o índice do último elemento
console.log('indice do último elemento: ', alunos.length)
//Acessar valor do último elemento
console.log('conteudo da ultima posicao', alunos[alunos.length-1]) //aluno no último índice
//Tentando acessar um indice inexistente
console.log('indice inexixtente', alunos[400])

//----------------------------------------------------------------

//alterando um único elemento
console.log('antes da alteração: ', alunos)
alunos[2] = 'Pietro'
console.log('após a alteração: ', alunos)

//acrescentando mais um aluno
alunos.push('isaque')
console.log('apos inserção de um aluno', alunos) //podemos usar push várias vezes se quisermos

//removendo o ultimo aulo
alunos.pop()
console.log('apos a remoção do ultimo aluno', alunos)

//adicionar um elemento do inicio do array
alunos.unshift('bruno')
console.log('apos adicao do aluno no inicio', alunos)

//remover um elemento do inicio
alunos.shift() //oposto do unshift
console.log('apos remoção do aluno no inicio', alunos)

//geralmente iremos usar o push e o pop

//----------------------------------------------------------
const professores: string[] = ["josue","vini","ana","ina","douglas","renato"]
//for(variavel, condição saída, incremento)
//for(let i = 0; i < professores.length; i++){ //ou i <= professores.length - 1
//    console.log('indice:', i, 'valor:', professores[i]);
//}


//for of
//
//ele irá andar os arrays de professores e dar os valores para professor cada avanço
//for(const professor of professores){
//    console.log("nome:", professor)
//}
//fraqueza: ele não consegue indicar o índice do valor

//foreach()
//metodo do tipo array
//faz função de cada array
//ele avançará para cada array
professores.forEach((professor, indice) => {
    if(professor == 'josue'){ //sairá somente verdadeiro ou falso (booleano)
        console.log(indice, professor, "eu odeio")
    }else{
        console.log(indice, professor, 'é legal') //pode fazer o que quiser com o dado
    }

})

//o que ficará dentro do parenteses será uma função
//forEach iá chamar funções

