const valorCompra = 100;
const numeroParcelas = 1;
let valorParcela = 0;
let valorTotalPrazo;
const indicePrazo = 1/100;

//if (numeroParcelas === 1) {
//   valorParcela = 100 - (100 * 0,10);
 //   console.log(`Com o desconto você pagará ${valorPagar} reais.`)
//} else { 
//    valorParcela = valorCompra / numeroParcelas).toFixed(2);
    //toFixed(2) = duas casas decimais
 
//    console.log(`O valor das ${numeroParcelas} parcelas será ${valorPagar} reais.`);
//}

if (numeroParcelas === 1) {
    valorParcela = 100 - (100 * 0,10);
     console.log(`Com o desconto você pagará ${valorParcela} reais.`)
 }
if (numeroParcelas <= 6) { 
    valorPagar = (valorCompra / numeroParcelas).toFixed(2);
    //toFixed(2) = duas casas decimais
    console.log(`O valor das ${numeroParcelas} parcelas será ${valorPagar} reais.`);
}
if (numeroParcelas >= 7 && numeroParcelas <= 12) {
        valorTotalPrazo = valorCompra * ((1 + indicePrazo) ** numeroParcelas);
        valorParcela = (valorTotalPrazo / numeroParcelas).toFixed(2);
        console.log("Com o parcelamento você pagará " + numeroParcelas + " parcelas de R$ " + valorParcela + " reais.");
}