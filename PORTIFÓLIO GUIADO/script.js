console.log('funcionando')
console.log(document.getElementsByTagName('h1'))


let i = 0;
let textArray = ["Victor José Costta Lameiro.","Web Developer."]; // adicione mais strings conforme necessário
let delay = 1000; 

function typeText() {
    let displayText = document.getElementById('textoAlternante');
    let text = textArray[i];
    let j = 0;

    let typeInterval = setInterval(function() {
        if (j < text.length) {
            displayText.innerHTML += text[j];
            j++;
        } else {
            clearInterval(typeInterval);
            setTimeout(deleteText, delay);
        }
    }, 80);
}

function deleteText() {
    let displayText = document.getElementById('textoAlternante');
    let text = displayText.innerHTML;
    let j = text.length;

    let deleteInterval = setInterval(function() {
        if (j > 0) {
            displayText.innerHTML = text.slice(0, j-1);
            j--;
        } else {
            clearInterval(deleteInterval);
            i = (i + 1) % textArray.length; // incrementa i, e volta para 0 quando atinge o tamanho do array
            setTimeout(typeText, delay);
        }
    }, 40);
}

window.onload = function() {
    typeText(); // chama a função typeText quando a página carrega
};


