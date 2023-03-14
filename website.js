var switch_de_lingua = document.querySelector("input[name='switch']");

switch_de_lingua.addEventListener('change', function() {
    let esta_em_pt_br = !this.checked; // se está checked, quer dizer que trocou para inglês
    AtualizarLingua(esta_em_pt_br);
});

let esta_em_pt_br = !switch_de_lingua.checked;
AtualizarLingua(esta_em_pt_br);

function RevelarEmail(){
    document.getElementById("emailBtn").hidden = true;
    let email = document.getElementById("email");
    email.hidden = false
    email.textContent = Desembaralhar("msopaotaigcoit@ng.hcmmla", 4);
}

function Desembaralhar(entrada, numeroBase){
    let listaBase = entrada.split("");
    let resultado = "";
    let numeroAtual = numeroBase;

    while(listaBase.length > 0){
        numeroAtual = (3 * numeroAtual + 1) % listaBase.length;
        let caracter = listaBase.splice(numeroAtual, 1);
        resultado += caracter;
    }

    return resultado;
}

function AtualizarLingua(esta_em_pt_br){
    let title = document.querySelector("title");

    if (esta_em_pt_br) {
        document.title = "Thiago Campos - Currículo";
        title.lang = "pt-br";
    } else {
        document.title = "Thiago Campos - Resume";
        title.lang = "en";
    }

    document.body.querySelectorAll("[lang]").forEach((text) => {
        if(text.lang == "pt-br"){
            text.hidden = !esta_em_pt_br;
        }
        else if(text.lang == "en"){
            text.hidden = esta_em_pt_br;
        }
    });
}
