//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 61;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

if (mesesDecorridos  <= 12) {
    console.log("Você ainda está na carência, portanto não temos parcelas em aberto!");
} else if (mesesDecorridos > 12 && mesesDecorridos <= 60) {
            if (rendaMensalEmCentavos <= 200000) {
                console.log("Sua renda está dentro da carência, portanto não temos parcelas em aberto!");
            } else if (totalJaPagoPeloAluno === 1800000) {
                        console.log("Você já pagou todo o curso!");
                    } else {
                            const calculoParcela = ((rendaMensalEmCentavos * 0.18)/100).toFixed(2);
                            console.log(`O valor da sua parcela é de R$ ${calculoParcela}!`);
                        }
        } else {
            console.log("Seu contrato passou dos 60 meses, portanto está quitado!")
        }
