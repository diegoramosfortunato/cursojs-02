// slice => cortar


const nomes = ["João", "Juliana" , "Ana" , "Caio", "Lara", "Marjorie" , "guilherme", "Aline", "Fabiana" , "Andre" , "Carlos" , "Paulo" , "Bia" , "Vivian" ,  "Isabela" , "Vinicius" , "Renan" , "Renata" , "Daisy" , "Camilo"]

console.log("Total de alunos : " , nomes.length)

const sala1 = nomes.slice(0 , nomes.length / 2)
const sala2 = nomes.slice(nomes.length /  2)

console.log(`Alunos da sala 01 : ${sala1}`)
console.log(`Alunos da sala 02 : ${sala2}`)

