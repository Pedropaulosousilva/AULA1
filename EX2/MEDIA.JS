const prompt = require ("prompt-sync")();

let nota = parseFloat(prompt("Digite sua nota:"));


if(nota < 4 ){
    console.log("O aluno está REPROVADO!!")
}else if(4 <= nota && nota < 6) {
        console.log("O aluno está RECUPERAÇÃO");

    
}

else if(nota >= 6){
    
    console.log("O aluno está de APROVADO");
}



