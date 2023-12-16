
//Operadores de Comparação
const ehMaior = 25 > 16; //true
console.log(ehMaior);

const eMaior = 16 > 16; //false
console.log(eMaior);

const x = 8;
const y = 16;
const maiorEh = x <= y;
console.log(maiorEh);

//Operadores de Igualdade
const ehIgual = (18 == 18); // compara apenas o conteúdo - então pode acontecer de que um number e uma string
                            // dar verdadeiro - 
                            //sempre que tiver dois iguais juntos é uma pergunta - não precisa ter os parenteses
console.log(ehIgual);

const eIgual = (18 != 18); // sempre que tiver dois iguais juntos é uma pergunta - não precisa ter os parenteses
console.log(eIgual);

//operadores de identidade - são identicos?

const ehIdentico = 18 === 18; //identicos - são iguais no conteúdo e no tipo (number, string, boolean)
console.log(ehIdentico);

const opostoIdentico = 18 !== "18";
console.log(opostoIdentico);