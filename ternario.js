const saldo = 1;

const unidade = (saldo === 1 ? "real" : "reais");
//se saldo for igual a 1 unidade = real, se não unidade = reais;

console.log(`Você tem ${saldo} ${unidade}`)

// if (saldo === 0) {
//     console.log("Seu saldo está zerado.");
// } else if (saldo === 1) {
//             console.log(`Seu saldo é R$ ${saldo} real.`);
//         } else {
//                 console.log(`Seu saldo é R$ ${saldo} reais.`);
//             }   
