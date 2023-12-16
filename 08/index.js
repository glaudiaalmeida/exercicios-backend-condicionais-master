const idade = 18;
const possuiPatologia = true;
const altura = 180;
const ehEstudante = false;


if (possuiPatologia === true || altura < 150 || idade >= 65 || idade < 12) {
    console.log("ACESSO NEGADO");
} else if ((idade >= 12 && idade <= 18) || (ehEstudante)) {
            console.log("** 10 REAIS **");
        } else {
            console.log("** 20 REAIS **");
        }



    