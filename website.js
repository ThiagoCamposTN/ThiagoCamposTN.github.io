var switch_de_lingua = document.querySelector("input[name='switch']");

switch_de_lingua.addEventListener('change', function() {
    TrocarLingua(this.checked);
});

TrocarLingua(switch_de_lingua.checked);

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

function TrocarLingua(esta_em_pt_br){
    var title = document.querySelector("title");

    if (esta_em_pt_br) {
        document.title = "Thiago Campos - Currículo";
        title.lang = "pt-br";
    } else {
        document.title = "Thiago Campos - Resume";
        title.lang = "en";
    }

    document.body.querySelectorAll("[lang]").forEach((text) => {
        if(text.lang == "pt-br"){
            text.hidden = esta_em_pt_br;
        }
        else if(text.lang == "en"){
            text.hidden = !esta_em_pt_br;
        }
    });
}
