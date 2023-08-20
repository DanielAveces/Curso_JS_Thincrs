//Enviar comprimido en .zip file

const btn = document.getElementById('btn')
const btnType = document.getElementById('btnType')
const btnImg = document.getElementById('btnImg')
const btnHab = document.getElementById('btnHab')
const result = document.getElementById('resultado')

let pokemon = ''

btn.addEventListener('click', () => {
    let placeholder = document.getElementById('placeholder1').value
    search(placeholder)
})


const search = (text) => {
    let newSpan = document.createElement('h1')
    newSpan.append(text)
    resultado.append(newSpan)

    let url = ('https://pokeapi.co/api/v2/pokemon/' + text)
    getPokemon(url)

}

const getPokemon = (defaultUrl) => {
    return new Promise(async (resolve, reject) => {
        try {
            const url = defaultUrl ? defaultUrl : "https://pokeapi.co/api/v2/pokemon/ditto"
            const res = await axios.get(url)
/**         console.log(res.data.abilities[0].ability.name); */
            console.log(res.data);

        btnType.addEventListener('click', () => {
            let type = res.data.types[0].type.name
            let secondSpan = document.createElement('span')
            secondSpan.append('\n Tipo es: ' + type)
            resultado.append(secondSpan)
        })
            

        btnImg.addEventListener('click', () => {
            if ( res.data.types[1]){
                let type = res.data.types[1].type.name
                let thirdSpan = document.createElement('span')
                thirdSpan.append('\n Tipo es: ' + type)
                resultado.append(thirdSpan)
            } else {
                alert ('No hay segundo tipo')
            }
            
        })


        btnHab.addEventListener('click', () => {
            let xp = res.data.base_experience
            console.log(xp);
                let fourthSpan = document.createElement('span')
                fourthSpan.append('\n XP base es: ' + xp)
                resultado.append(fourthSpan)


        })

        } catch (err) {
            console.log(err);
        }
    })
}

const setPokemon = async (url) => {
    try {
        const res = await getPokemon(url)
        console.log(res);
    } catch (err) {
        console.log(err);
    }

}











