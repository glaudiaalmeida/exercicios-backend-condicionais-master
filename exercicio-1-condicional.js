const valor = 100;
const parcelas = 5;

if (parcelas === 1) {
    console.log("O pagamento à vista tem 10% de desconto e o total é R$ ", (valor-(valor*0.10)));
} else {
        console.log(`A forma do seu pagamento será em ${parcelas} parcelas no valor de R$ ${valor/parcelas}.`);
    }