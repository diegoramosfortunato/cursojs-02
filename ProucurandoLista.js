const alunos = ['Ana', 'Dandara', 'João', 'Diego']

const medias = [10,8,3,5]

const AlunosMedias = [alunos , medias]

  //nomefnção                 //parametro
const ExibeNomeMedia =   (NomeDoAluno) => {
    if(AlunosMedias[0].includes(NomeDoAluno)){
      let  indice =  AlunosMedias[0].indexOf(NomeDoAluno) 
       return AlunosMedias[0][indice] + ` Sua média é ` + AlunosMedias[1][indice]
    }else{
        return `Aluno não está cadastrado`
    }
}

//includes =>  determina se no array tem um determinado elemento 
//inddexof => retorna o primeiro índice em que o elemento pode ser encontrado no array

console.log(ExibeNomeMedia("Jorge"));
