//Enviar comprimido en .zip file

const btn = document.getElementById('btnToStart')
let array = []


let newObject = {
    name: '',
    age: 0,
    gender: '',
    weight: 100,
    height: 100,
    work: true,
    color: ['blue', 'green', 'yellow'],
}


const addObject = (name, age, gender, weight, height, work, firstColor, secondColor, thirdColor) => {
    const person = Object.create(newObject)
    person.name = name
    person.age = age
    person.gender = gender
    person.weight = weight
    person.height = height
    person.work = work
    person.color = [firstColor, secondColor, thirdColor]
    array.push(person)
    console.log(array);
    showObject(person)
}

const showObject = (person) => {
    const resultado = document.getElementById('resultado')
    const newSpan = document.createElement('h1')
    let borrar = createButton('Delete')
    let editar = createButton('Editar')
    let show = createButton('Show')
    resultado.classList.add('px-3.5')
    newSpan.append(person.name)
    resultado.append(newSpan)
    resultado.append(borrar, editar, show)

    borrar.addEventListener('click', () => {
        const found = array.find(person => person.name === person.name)
        newSpan.remove();
        borrar.remove();
        editar.remove();
        show.remove();
        array.splice(found.name)
        
    })
    
    editar.addEventListener('click', () => {
        let option = prompt(`
        [1] Nombre
        [2] Edad
        [3] Genero
        [4] Peso
        [5] Estatura
        [6] Trabajo     
        `)

        switch (option) {
            case '1':
                let name = prompt('Ingresa el nuevo nombre')
                person.name = name
                newSpan.innerHTML = person.name
                break
            case '2':
                let edad = parseInt(prompt('Ingresa la nueva edad'))
                person.age = edad
                break
            case '3':
                let gender = prompt('Ingresa el genero')
                person.gender = gender
                break
            case '4':
                let weight = parseInt(prompt('Ingresa el nuevo peso'))
                person.weight = weight
                break
            case '5':
                let height = parseInt(prompt('Ingresa la nueva estatura'))
                person.height = height
                break
            case '6':
                let work = prompt('¿Trabaja? true or false')
                person.work = work
                break
        }

    })


    show.addEventListener('click', () => {
        let info = ('Name: ' + person.name + '\nAge: ' + person.age + '\n gender: ' + person.gender + '\n weight: ' + person.weight + '\n heigt: ' + person.height + '\n work: ' + person.work + '\n color: '+ person.color)

        alert(info)
        
    })

}

const createButton = (text) => {
    const newButton = document.createElement('button')
    newButton.innerHTML = text
    newButton.classList.add('rounded-md','my-4', 'bg-white', 'px-3.5', 'py-2.5', 'text-sm', 'font-semibold', 'text-gray-900', 'shadow-sm', 'hover:bg-gray-100', 'focus-visible:outline', 'focus-visible:outline-2', 'focus-visible:outline-offset-2', 'focus-visible:outline-white') 
    return(newButton)
}

btn.addEventListener('click', () => {
    let placeholderName = document.getElementById('placeholderNombre').value
    let placeholderAge = document.getElementById('placeholderAge').value
    let placeholderGender = document.getElementById('placeholderGender').value
    let placeholderWeight = document.getElementById('placeholderWeight').value
    let placeholderHeight = document.getElementById('placeholderHeight').value
    let placeholderWork = document.getElementById('placeholderWork').value
    let placeholderColor = document.getElementById('placeholderColor').value
    let placeholderSecondColor = document.getElementById('placeholderColor1').value
    let placeholderThirdColor = document.getElementById('placeholderColor2').value
    addObject(placeholderName, placeholderAge, placeholderGender, placeholderWeight,placeholderHeight, placeholderWork, placeholderColor, placeholderSecondColor, placeholderThirdColor)

})







