// const pessoas = ['Fulano', 'Ciclano', 'Beltrano']
// pessoas.push("Caio")// o push ele adiciona um item ao final do array

// pessoas.pop()// o pop ele sempre vai deletar o ultimo item ao final do array

// pessoas.unshift("Caio")//unshifit ele adiciona na primiera posição do array

// pessoas.shift()//remove o primeiro item do array


// pessoas[1] = "Caio"//ataliza o valor de uma posição do array

// console.log(pessoas)



// for(i=0; i<=10; i++){
//     console.log(i)
// }

// //ForEach
// pessoas.forEach(function rodarArray(elemento){
//     console.log(`Olá ${elemento.toLowerCase()}`)
// })

// //Array Fuction
// pessoas.forEach( elemento=>console.log(`Olá ${elemento.toLowerCase()}`))

// //Array Map
// const pessoasModificado = pessoas.map(elemento=>{
//     return `${elemento} é muito legal`
// })

// console.log(pessoasModificado)

//fazer uma lista e multiplicar por 2 os numeros


// const numero = [1,2,3,4,5,6,7,8,9,10]
// const numeroModificado = numero.map(elementos=>{
//     return `${elementos * 2} multiplicado por 2`
// })
// console.log(numeroModificado)

//mostrar a lista em maiusculo
// const letra = ['oi', 'tudo', 'bem?']

// const letraModificado = letra.map(elementos=>{
//     return `${elementos.toUpperCase()} `
// })
// console.log(letraModificado)

//dicionario
const usuarios = [
    {
        nome: "Senhor dos aneis",
        diretor: "George Lucas",
        ano: 1977,
    },
    {
        nome: "Carros3",
        diretor: "afasfaf",
        ano: 2017,
    },
    {
        nome: "Procurando Nemo",
        diretor: "afdssada",
        ano: 1995,
    }
]

const filmesFiltrados = usuarios.filter(filme => filme.ano > 2000)
console.log(filmesFiltrados)