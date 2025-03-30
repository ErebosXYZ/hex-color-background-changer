// Implementar solución aquí

const btn = document.querySelector('#btn');



// Genero un número hexadecimal aleatori.
function generarColorHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

console.log(generarColorHex());

// Necessito una funció que canviï el background color del body 

/**
 * El valor de la variable color és l'aplicació de la funció del color aleatori. Si s'executa aquesta funció el background color del body canvia aquest valor. Envio un missatge per consola per comprovar que funciona.
 * També afegeixo contingut textual a la id hex-value de manera que sigui la string resultant de generarColorHex i que sigui la mateixa que està a la variable color, per això ho poso dins la funció backgroundColorChange.
 */


function backgroundColorChange() {
    let color = generarColorHex();
    document.body.style.backgroundColor = color;
    console.log(`Color changed to: ${color}`)
    document.querySelector("#hex-value").textContent = color;
}

document.querySelector("#btn").addEventListener("click", backgroundColorChange);

// document.addEventListener("DOMContentLoaded", () => {
// })

