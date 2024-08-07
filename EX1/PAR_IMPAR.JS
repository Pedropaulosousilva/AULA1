const prompt = require ("prompt-sync")();

let numero = parseFloat(prompt("Digite um numero:"));
if(numero % 2 ===0){
    console.log("É PAR!!");
}
else{
    console.log("É IMPARR!!")
}