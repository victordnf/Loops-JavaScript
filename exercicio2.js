const prompt = require('prompt-sync')();
let qtd = 0;
let qtd2 = 0;

for (let i = 0; i < 10; i++) {
    let numString = prompt ('Digite um número: ');
    let num = Number(numString)
    let num2 = Number(numString)
    if (num % 2==0) {
        qtd = qtd + 1  
    }
    else if(num2 % 2 == 1) {
        qtd2 = qtd2 + 1
    }
    
}
console.clear()

console.log('\t\t""""RESULTADO""""')
console.log(`\nForam ${qtd} números pares e ${qtd2} números ímpares.\n`)