//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 18;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = true;

if (idadeDoAluno >= 18) {
    console.log("Efetue sua matricula!");
} else if (possuiResponsavel) {
            console.log("Menor com responsável pode efetuar a matrícula!");
        } else {
            console.log("Você precisa ser maior ou estar acompanhado de um responsável para efetuar sua matrícula!")
        }