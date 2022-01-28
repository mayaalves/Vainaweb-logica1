//Esse é o desafio de lógica 1
//Assunto Estrutura de dados

let nome = "Mayara"
let número = 8;
let ano = 2022 - número
console.log( ano + número )

console.log("Estou mexendo no console.log")

let quartaFeira = true
console.log(quartaFeira)
console.log(typeof quartaFeira)

//Esse é o desafio de lógica 2
//Assunto if-else

let idade = 30
if(idade > 18){
 console.log("você pode entrar")
}
let óculos = true
if(idade > 18 && óculos == true){
    console.log("Você pode passar")
} 
let mesAniversario = "setembro"
if(mesAniversario == "janeiro" || mesAniversario =="dezembro"){
    console.log("Parabéns")
}else{
    console.log("Seu parabéns fica pra depois")
}

let id = "May"
if(id.startsWith("R")){
    console.log("Seu nome começa com R")
}else{
    console.log("Seu nome começa com outra letra")
}
let sobrenome = "Alves"
if(sobrenome.length > 6 || id.startsWith("E")){
    console.log("Não atendeu nenhuma condição")
}

//Esse é o desafio de lógica 3
//Assunto for-while

for(let i = 1; i <= 10; i++){
    console.log(i)
}

let contador = 10
while(2 <= contador){
    console.log(contador)
    contador --
}

for(let a = 2; a <= 50; a +=2){
    console.log(a)
}

for(let b = 2; b <= 50; b +=2){
    console.log(b)
}

//Esse é o desafio de lógica 4
//Assunto função

function msg(){
    console.log("Confie no processo")
}
msg()

function meuNome(nome){
    console.log(nome)
}
meuNome("Mayara")

function perfil(nome, idade, estiloMusical){
    console.log(`Me chamo ${nome}, tenho ${idade} anos, e meu estilo musical preferido é ${estiloMusical}`)
}
perfil("Mayara", 30, "Rock")

function cultural(filme, musica){
    console.log(`Adoro so filmes do ${filme} e a minha música favorita ${musica}`)
}
cultural("Harry Potter", "Happier than ever")

function dobro(numero){
    console.log(numero *2)
}
dobro(40)  

//Esse é o desafio de Lógica 5
//Assunto Estrutura de dados complexos 

let bandas = ["SOAD","Green day","Muse","QOTSA", "Iron maiden"]
console.log(bandas)

bandas.unshift("Pitty")

bandas.pop()

bandas.push("Agona","Tame impala")

bandas.shift()

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort()  
console.log(numbers)