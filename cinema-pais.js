const temIngresso = true;
const censura = 16;
const idade = 19;
const estaComOsPais = true;

//tem ingresso e idade maior ou igual a censura OU estar com os pais

if (temIngresso) { // quando é booleano não precisa igualar a true se estiver declarada
    if (idade >= censura || estaComOsPais) {
        console.log("Pode Entrar.");
    } else { 
        console.log("Barrada");
    }
}