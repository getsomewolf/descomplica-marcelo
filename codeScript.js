let nome= "Marcelo"; 
let idade= 30

console.log("Seu nome é:"+nome+" e sua idade é: " +idade);
console.log(`oi, ${nome}. Sua idade é ${idade}`);
// Fazendo mais coisas

// Calculando o ano de nascimento
let anoAtual = new Date().getFullYear();
let anoNascimento = anoAtual - idade;

console.log(`${nome}, você nasceu em ${anoNascimento}.`);

// Verificando se é maior de idade
if (idade >= 18) {
    console.log(`${nome}, você é maior de 18 anos.`);
} else {
    console.log(`${nome}, você é menor de 18 anos.`);
}

// Criando uma saudação personalizada
let horario = new Date().getHours();
let saudacao;

if (horario < 12) {
    saudacao = "Bom dia";
} else if (horario < 18) {
    saudacao = "Boa tarde";
} else {
    saudacao = "Boa noite";
}

console.log(`${saudacao}, ${nome}!`);




