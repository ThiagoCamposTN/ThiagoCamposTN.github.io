function RevelarEmail(){
    document.getElementById("emailBtn").hidden = true;
    var email = document.getElementById("email");
    email.hidden = false
    email.textContent = Desembaralhar("msopaotaigcoit@ng.hcmmla", 4);
}

function Desembaralhar(entrada, numeroBase){
    var listaBase = entrada.split("");
    var resultado = "";
    var numeroAtual = numeroBase;

    while(listaBase.length > 0){
        numeroAtual = (3 * numeroAtual + 1) % listaBase.length;
        var caracter = listaBase.splice(numeroAtual, 1);
        resultado += caracter;
    }

    return resultado;
}