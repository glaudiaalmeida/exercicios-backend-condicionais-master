const valorCompra = 100;
const parcelas = 11;

if (parcelas === 1) {
    const valorComDesconto = valorCompra-(valorCompra*0.10);
    const valorAPagar = valorComDesconto.toFixed(2);
    console.log(`O pagamento à vista tem 10% de desconto e o total é R$ ${valorAPagar}.`);
} else if (parcelas >=2 && parcelas < 7) {
        const valorParcela = valorCompra/parcelas;
        const valorCadaParcela = valorParcela.toFixed(2);
        console.log(`A forma do seu pagamento será de ${parcelas}
         parcelas sem juros no valor de R$ ${valorCadaParcela}.`);
        } else if (parcelas >= 7 && parcelas <= 12) {
                    const valorAPAgarComJuros = (valorCompra * (1 + 1/100) ** parcelas).toFixed(2);
                    const valorParcelaComJuros = (valorAPAgarComJuros / parcelas).toFixed(2);
                    console.log(`A forma do seu pagamento será de ${parcelas}
                     parcelas com juros no valor de R$ ${valorParcelaComJuros}.`);
                } else {
                        console.log("Número deb Parcelas Inválido.");
                    }