//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
    const valorFinal = ((valorDoProduto - (valorDoProduto * 0.05))/100).toFixed(2);
    console.log(`O Total a pagar é R$ ${valorFinal}!`);
} else if (tipoDePagamento === "cheque") {
            const valorFinal = ((valorDoProduto - (valorDoProduto * 0.03))/100).toFixed(2);
            console.log(`O Total a pagar é R$ ${valorFinal}!`);
        } else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
                    const valorFinal = ((valorDoProduto - (valorDoProduto * 0.10))/100).toFixed(2);
                    console.log(`O Total a pagar é R$ ${valorFinal}!`);
                }
