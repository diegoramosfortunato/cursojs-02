const notas = [10 , 6.5 , 8 , 7.5]

let SomaNotas = 0 ;

for(let i = 0; i < notas.length ; i ++){
    SomaNotas += notas[i]
}


media = SomaNotas / notas.length;

console.log(media);

