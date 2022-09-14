const prompt = require('prompt-sync')();
let num1, numTotal = 0;

do {
     num1 = Number (prompt('Digite um número: '))
    numTotal = num1 + numTotal
} while (num1 != 0);

console.clear()

console.log('\t\t""""RESULTADO""""')
console.log(`\nA soma dos números digitados: ${numTotal}\n`)