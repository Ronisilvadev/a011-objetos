const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

// Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

const copiaPokemon1 = {
    ...pokemon1 , 
    nome: "Squirtle" , 
    tipo: "agua"
}

//No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

pokemon1.ataques = [] //array vazio



pokemon1.ataques.push([{
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,
}])


console.log("original-" ,pokemon1)
console.log("copia-" , copiaPokemon1)

//Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;

copiaPokemon1.ataques = [...pokemon1.ataques]


console.log("copia", copiaPokemon1)

//para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;

pokemon1.ataques.push([{
    nome: "Folha Navalha",
    dano: 45,
    tipo: "grama",
    precisao: 100,
}])

console.log("original", pokemon1)


copiaPokemon1.ataques.push([{
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100,
}])




console.log("Final original" , pokemon1)
console.log("Final copia" , copiaPokemon1)

//console.log(copiaPokemon1.ataques[0].tipo)



