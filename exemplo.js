let temIngresso = Boolean;
const censura = 16;
const idade = 18;

if (idade >= censura) { // idade adequada a condição
    console.log("Pode assistir o filme.");
    if (temIngresso = true) { // se idade está adequada tem o ingresso?
        console.log("Divirta-se!");
    } else { //se não tem ingresso
        console.log("Compre seu ingresso."); 
    }

} else { //se não tem idade
        console.log("Sua idade não permite que você assista este filme.");
        console.log("Escolha outro com censura adequada a sua idade.");
    }

console.log("Fim do código");
