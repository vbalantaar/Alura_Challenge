
document.addEventListener("DOMContentLoaded", function() {
    // Llamar a toggleCopyButton cuando el contenido del textarea cambia
    document.getElementById("texto").addEventListener("input", toggleCopyButton);
});


function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    const regex = /^[a-z\s]+$/;
    if (!regex.test(texto)) {
        swal("Ooops!", "El texto solo debe contener letras minúsculas sin tilde.", "warning");
        return;
    }

    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "encrip.PNG";
      
    } else {
      muñeco.src = "muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
    toggleCopyButton();
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

     const regex = /^[a-z\s]+$/;
    if (!regex.test(texto)) {
        swal("Ooops!", "El texto solo debe contener letras minúsculas sin tilde.", "warning");
        return;
    }
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "desencri.jpg";
        
      } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
      }
      toggleCopyButton();
  }

 function copiar () {
    let contenido = document.getElementById ("texto");
    contenido.select();
    //contenido.setSelectionRange (0,999999);
    navigator.clipboard.writeText (contenido.value);
    alert ("Dar clic en aceptar para copiar en el portapapeles");
 }

 function toggleCopyButton() {
    let texto = document.getElementById("texto").value;
    let copiar = document.getElementById("copiar");
    if (texto.length != 0) {
        copiar.style.display = "inline-block";
    } else {
        copiar.style.display = "none";
    }
}
