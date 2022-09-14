const prompt = require('prompt-sync')();

let i = 0;
let calmas = 0;
let nervosas = 0;
let agressivos = 0;
let calmos = 0;
let nervosas40 = 0;
let calmos18 = 0;

while (i < 2) {
    const idadeSpring = prompt('Digite sua idade: ');
    const idade = Number(idadeSpring);
    console.log('Escolha o seu sexo:\n\n');
    console.log('1 - Masculino:\n2 - Feminino:\n3 - Outros:\n');
    const sexoSpring = prompt('Escolha uma opção: ');
    const sexo = Number (sexoSpring);
    console.log('\nEscolha o seu humor:\n\n');
    console.log('1 - Nervoso\n2 - Agressivo\n3 - Calmo\n');
    const humorString = prompt ('Escolha uma opção: ');
    const humor = Number (humorString);
    
    console.clear();
    
    if (humor == 1 && sexo == 2) {
        nervosas++;
    }
    else if (humor == 3) {
        calmas++;
    }
    else if (sexo == 1 && humor == 2) {
        agressivos++;
    }
    else if (sexo == 3 && humor == 3) {
        calmos++;
    }
    else if (idade > 40 && humor == 1) {
        nervosas40++;
    }
    else if (idade < 18 && humor == 3) {
        calmos18++;
    }

    i++;
}
    console.clear();

    console.log(`Total de ${calmas} pessoas calmas.`);
    console.log(`Total de ${nervosas} mulheres nervosas.`);
    console.log(`Total de ${agressivos} homens agressivos.`);
    console.log(`Total de ${calmos} outros calmos.`);
    console.log(`Total de ${nervosas40} pessoas nervosas com mais de 40 anos.`);
    console.log(`Total de ${calmos18} pessoas calmas com menos de 18 anos.`);