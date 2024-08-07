const prompt = require ("prompt-sync")();

let tam = parseFloat(prompt("Digite um tamanho:"));

let array = []

for(let i = 0; i < tam; i++){
    let list = prompt(`DIGITE SEUS NUMEROS ${i + 1}:`);
    
    array.push(list);
}

console.log(array)