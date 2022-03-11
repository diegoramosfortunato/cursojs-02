const notas = [10 , 6.5 , 8 , 7.5]

let SomaNotas = 0;

notas.forEach(nota => {
    SomaNotas += nota
})

let media = SomaNotas / notas.length

console.log(media);
