const prompt = require('prompt-sync')();

let idadeSpring = prompt('Digite sua idade: ');
let idade = Number(idadeSpring);
let qtdMenos21 = 0;
let qtdMais50 = 0; 

while(idade != -99){
    if(idade<21){   
    qtdMenos21 = qtdMenos21 + 1
    }
    else if(idade>50){
    qtdMais50 = qtdMais50 + 1
    }

    idadeSpring = prompt('Digite sua idade: ');
    idade = Number(idadeSpring);
}
console.clear()
console.log('\t\t""""RESULTADO""""')
console.log(`\nHá ${qtdMenos21} pessoas com menos de 21 anos e ${qtdMais50} pessoas com mais de 50 anos.\n`)