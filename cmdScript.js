const rlSync = require('readline-sync');

let nome = rlSync.question("Qual seu nome?\n")
let idade =  rlSync.question("Qual sua idade?\n")

console.log(`Oi, ${nome}. Sua idade é ${idade}`);