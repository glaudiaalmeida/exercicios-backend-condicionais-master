const jogada1 = "papel"
const jogada2 = "papel"

//seu código aqui
if ((jogada1 === "pedra") && (jogada2 === "tesoura")) {
    console.log("A pedra ganha!");
}
if ((jogada1 === "pedra") && (jogada2 === "papel")) {
    console.log("O papel ganha!");
}
if ((jogada1 === "pedra") && (jogada2 === "pedra")) {
    console.log("Empatou");
}
if ((jogada1 === "papel") && (jogada2 === "pedra")) {
    console.log("O papel ganha!");
}
if ((jogada1 === "papel") && (jogada2 === "tesoura")) {
    console.log("A tesoura ganha!");
}
if ((jogada1 === "papel") && (jogada2 === "papel")) {
    console.log("Empatou!");
}
if ((jogada1 === "tesoura") && (jogada2 === "pedra")) {
    console.log("OA pedra ganha!");
}
if ((jogada1 === "tesoura") && (jogada2 === "tesoura")) {
    console.log("Empatou!");
}
if ((jogada1 === "tesoura") && (jogada2 === "papel")) {
    console.log("A tesoura Ganhou!");
}