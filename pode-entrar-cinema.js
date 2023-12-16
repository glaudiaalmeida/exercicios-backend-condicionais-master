const temIngresso = true;
const censura = 16;
const idade = 12;
estaComOsPais = true;

if (temIngresso & idade >= censura){
        console.log("Pode entrar!");
} else if (temIngresso & estaComOsPais) {
             console.log("Pode entrar!");
        } else {
            console.log("Não pode entrar");
        }