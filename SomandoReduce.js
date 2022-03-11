const salaJS = [7,8,8,7,10,6.5,4,10,7]

const salaJAVA = [6,5,8,9,5,6]

const salaPYTHON = [7,3.5,8,9.5]

function MediaSala(NotasDaSala){
    const SomaValores = NotasDaSala.reduce((acum , atual) => atual + acum, 0 )
    return  SomaValores / NotasDaSala.length

}

console.log(`Média da sala de Javascript : ${MediaSala(salaJS)}`)


console.log(`Média da sala de Java : ${MediaSala(salaJAVA)}`)


console.log(`Média da sala de Python : ${MediaSala(salaPYTHON)}`)


const notas = [ 1 , 6.5 , 8 , 7]

const medias  = notas.reduce((acum , atual) => atual + acum , 0) / notas.length 

console.log(medias)