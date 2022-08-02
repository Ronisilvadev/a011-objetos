const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const copiaPokemon1 = {
    ...pokemon1 , 
    nome: "Squirtle" , 
    tipo: "agua"
}


pokemon1.ataques = []

pokemon1.ataques.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,
}) 


console.log("original" ,pokemon1)
console.log("copia" , copiaPokemon1)

copiaPokemon1.ataques = {...pokemon1.ataques}

console.log("copia", copiaPokemon1)

pokemon1.ataques.push([{
    nome: "Folha Navalha",
    dano: 45,
    tipo: "grama",
    precisao: 100,
}])

console.log("original", pokemon1)


copiaPokemon1.ataques = ([{
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100,
}])


console.log("Final original" , pokemon1)
console.log("Final copia" , copiaPokemon1)

console.log(copiaPokemon1.ataques[0].tipo)



