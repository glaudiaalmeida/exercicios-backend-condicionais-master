//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorParcela = ((valorDoProduto/100)/quantidadeDoParcelamento).toFixed(2);
const valorAPagar = ((valorDoProduto/100) - valorPago);

if (valorPago > 0) {
    console.log(`Faltam ${valorAPagar/100} parcelas de R$ ${valorParcela}`);
} else {
    console.log(`Nenhuma parcela foi paga! Você deve ${quantidadeDoParcelamento} parcelas de R$ ${valorParcela}`);
}