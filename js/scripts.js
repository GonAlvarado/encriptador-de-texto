const mensaje = document.getElementById('texto__encriptado');
const imagen__ningun__mensaje = document.getElementById('imagen__ningun__mensaje');
const texto__ningun__mensaje = document.getElementById('texto__ningun__mensaje');
const boton__copiar = document.getElementById('boton__copiar');

function encriptarTexto(){
  const texto = document.getElementById('texto').value;
  let texto_formateado = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  if(texto_formateado != ""){
    let resultado = texto_formateado.replace(/e/g, 'enter')
                          .replace(/i/g, 'imes')
                          .replace(/a/g, 'ai')
                          .replace(/o/g, 'ober')
                          .replace(/u/g, 'ufat');
    mensaje.value = resultado;
    mensaje.style.display = 'inline';
    imagen__ningun__mensaje.style.display = 'none';
    texto__ningun__mensaje.style.display = 'none';
    boton__copiar.style.display = 'block';
  }else{
    mensaje.style.display = 'none';
    imagen__ningun__mensaje.style.display = 'inline';
    texto__ningun__mensaje.style.display = 'inline';
    boton__copiar.style.display = 'none';
  }
}

function desencriptarTexto(){
  const texto_encriptado = document.getElementById('texto').value;
  if(texto_encriptado != ""){
    let resultado = texto_encriptado.replace(/enter/g, 'e')
                                        .replace(/imes/g, 'i')
                                        .replace(/ai/g, 'a')
                                        .replace(/ober/g, 'o')
                                        .replace(/ufat/g, 'u');
    mensaje.value = resultado;
    mensaje.style.display = 'inline';
    imagen__ningun__mensaje.style.display = 'none';
    texto__ningun__mensaje.style.display = 'none';
    boton__copiar.style.display = 'block';                        
  }else{
    mensaje.style.display = 'none';
    imagen__ningun__mensaje.style.display = 'inline';
    texto__ningun__mensaje.style.display = 'inline';
    boton__copiar.style.display = 'none';
  }
}

function copiarTexto(){
    navigator.clipboard.writeText(mensaje.value);
}