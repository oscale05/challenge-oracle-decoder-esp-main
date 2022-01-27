window.addEventListener("DOMContentLoaded", function() {
    inicializarEventos();
}, false);

function inicializarEventos(){
    var textIngreso = document.querySelector("#input-texto");
    var motorEncriptador = document.querySelector("#btn-encriptar");
    var motorDesencriptador = document.querySelector("#btn-desencriptar");
    var copiarText = document.querySelector("#btn-copy");

    textIngreso.addEventListener("click", limpiarTexto, false);
    motorEncriptador.addEventListener("click", encriptador, false);
    motorDesencriptador.addEventListener("click", desencriptador, false);
    copiarText.addEventListener("click", copiarMsg, false);
  
  }

  function limpiarTexto(){
      document.getElementById("input-texto").value = "";
      document.getElementById("msg").value = "";
  }

function encriptador(){
    let textoIngresadoCrudo = document.getElementById("input-texto").value;
    let textoIngresado = textoIngresadoCrudo.toLowerCase();
    let textnoNumero = textoIngresado.replace(/[0-9]/g, '');
    let textnoAcentos = textnoNumero.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if(textnoAcentos != textoIngresadoCrudo){
        document.getElementById("alerta").innerHTML = "<span class='material-icons-outlined'>error_outline</span> Contenido modificado de acuerdo a las condiciones de uso";
        document.getElementById("input-texto").value=textnoAcentos;
    }
    let textoEncriptado = "";
    for (var i = 0; i < textnoAcentos.length; i++ ) {
        switch(textnoAcentos[i]){
            case "a":
                textoEncriptado +=  "ai";
                break;
            case "e":
                textoEncriptado +=  "enter";
                break;
            case "i":
                textoEncriptado +=  "imes";
                break;
            case "o":
                textoEncriptado +=  "ober";
                break;
            case "u":
                textoEncriptado +=  "ufat";
                break;
            default:
                textoEncriptado += textnoAcentos[i];
                break;
        }
    }
    document.getElementById("msg").value = textoEncriptado;
}

function desencriptador(){
    let textoIngresado = document.getElementById("input-texto").value;
    let textoDesencriptado = "";
    let i = 0;
    while (i < textoIngresado.length) {
        switch(textoIngresado[i]){
            case "a":
                if(textoIngresado[i+1]=="i"){
                    i+=2;
                    textoDesencriptado+="a";
                }
                break;
            case "e":
                if(textoIngresado[i+1]=="n" && textoIngresado[i+2]=="t" && textoIngresado[i+3]=="e"
                && textoIngresado[i+4]=="r"){
                    i+=5;
                    textoDesencriptado+="e";
                }
                break;
            case "i":
                if(textoIngresado[i+1]=="m" && textoIngresado[i+2]=="e" && textoIngresado[i+3]=="s"){
                    i+=4;
                    textoDesencriptado+="i";
                }
                break;
            case "o":
                if(textoIngresado[i+1]=="b" && textoIngresado[i+2]=="e" && textoIngresado[i+3]=="r"){
                    i+=4;
                    textoDesencriptado+="o";
                }        
                break;
            case "u":
                if(textoIngresado[i+1]=="f" && textoIngresado[i+2]=="a" && textoIngresado[i+3]=="t"){
                    i+=4;
                    textoDesencriptado+="u";
                }
                break;
            default:
                textoDesencriptado += textoIngresado[i];
                i++;
                break;
        }
    }
    document.getElementById("msg").value = textoDesencriptado;
}

function copiarMsg() {
    var content = document.getElementById('msg');
    
    content.select();
    document.execCommand('copy');
}
      
