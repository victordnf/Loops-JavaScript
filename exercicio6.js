const prompt = require('prompt-sync')();

let num1, numTotal = 0, media = 0, numMedia = 0;

console.log('\nDigite um número inteiro, para sair digite [0].\n');

do {                                            
    num1 = Number (prompt('Digite um número: '));
    numTotal += num1 

    if (num1 % 3 == 0) {
        
        numMedia++

    }
} while (num1 != 0);

media = numTotal / (numMedia - 1)

console.clear();                                                

console.log('\n\t\t""""RESULTADO""""');

console.log(`\nMédia dos números múltiplos de 3: ${media}\n`);