function encriptar(){
    let mensaje = document.getElementById("mensaje").value;
    

    let resultado = mensaje
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    if (document.getElementById("mensaje").value.length !=0){
        document.getElementById("mensaje").value = "";
        document.getElementById("cifrado").value = resultado;
    }
}
function desencriptar(){
    let mensaje= document.getElementById("mensaje").value;

    let resultado = mensaje
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi,"u")
    
    if (document.getElementById("mensaje").value.length !=0){
        document.getElementById("mensaje").value = "";
        document.getElementById("cifrado").value = resultado;
    }

}
function copiar(){
    const $out = doc.getElementById('output');
    navigator.clipboard.writeText($out.textContent);
    alert('Texto copiado al portapapeles');
}