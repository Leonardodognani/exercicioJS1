// 1 - Declare uma variável e nome weight.
var weight

// 2 - Que tipo de dado é variável acima?
undefined

// 3 - Declare uma variável e atribua valores para cada um dos dados:
// name: string
// age: number (integer)
// stars: number (float)
// isSubscribed: boolean
let name = "Leonardo"
let age = 36
let stars = 5.0
let isSubscribed = true 

// 4 - A variável "student" é de que tipo de dado?
let studen = {} // é um Object.

// 4.1 - Atribua a ela as mesmas propriedades e valores do exercício 3.
var student = {
    name: "Leonardo",
    age: 36,
    stars: 5.0,
    isSubscribed: true,
    weight: 80
}

// 4.2 - Mostre no console a seguinte msg: <name> de idade <age> pesa <weight> Kg.
// ATENÇÃO: substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg.`);


// 5 - Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja,
// somente o Array vazio.
let students = []

// 6 - Retribua o valor para a variável acima, colocando dentro dela a variável student da questão 4.
// não copiar e colar o objeto, mas usar o objeto criado e o inserir no Array.

let students = [student]

// 7 - Coloque no console o valor da posição 0 do Array acima.
console.log(students[0]);

// 8 - Crie um novo student e coloque na posição 1 do Array students.
const student2 = {
    name: "Leo",
    age: 35,
    stars: 4.5,
    isSubscribed: true,
    weight: 75,
}

students = [
    student,
    student2,
]

// 9 - Sem rodar o código, responda qual é a resposta do código abaixo e por quê? após a sua resposta
// rode o código e veja se você acertou.
console.log(a)
var a = 1
// a resposta é undefined, pois a var a é global e existe dentro do código graças ao hoisting do JS,
// porém, ela estará undefined porque a ordem do código é lida de cima para baixo, portanto, embora
// exista, seu valor não é atribuído quando chamado antes de ser declarado.


