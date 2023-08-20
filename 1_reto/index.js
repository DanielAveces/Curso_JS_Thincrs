//Enviar comprimido en .zip file

const btn = document.getElementById('btnToStart')

const esPalindromo = (oracion) =>  {
    oracion = oracion.toLowerCase().replace(/\s/g, '');
    const oracionInvertida = oracion.split("").reverse().join('');

    const resultado = document.getElementById('resultado');

    if (oracion === oracionInvertida) { 
        const parrafo = document.createElement("p")
        const parrafo2 = "Es palindromo!"
        parrafo.append(parrafo2)
        resultado.appendChild(parrafo);
    } else {
        const parrafo = document.createElement("p")
        const parrafo2 = "No es palindromo!"
        parrafo.append(parrafo2)
        resultado.appendChild(parrafo);
    }
} 

btn.addEventListener('click', () => {
    let placeholder = document.getElementById('placeholder1').value
        esPalindromo(placeholder)
})

