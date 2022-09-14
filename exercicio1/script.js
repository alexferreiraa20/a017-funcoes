 const nome = function(infoNome){
     
     console.log(`Olá, ${infoNome}`);
 }
 
nome(prompt("Digite seu nome: "))



const tabuada = [1,2,3,4,5,6,7,8,9,10]

function testeTabuada(){
    let num = Number(prompt("Insira um número para ver sua tabuada: "))
    for(let i in tabuada){
    console.log(`${num} * ${tabuada[i]} = ${num*tabuada[i]}`)}
}

testeTabuada()



const meuNome = () => "Meu nome é Alex"
console.log(meuNome())



const calcularTabuada = function(){
	let num6 = Number(prompt("digite um número para ver sua tabuada: "))
     for(let i = 1; i<=10; i++){
     console.log(`${num6} * ${i} = ${num6*i}`)}
}


 calcularTabuada();





