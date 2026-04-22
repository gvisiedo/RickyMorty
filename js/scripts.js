const rickyInput = document.querySelector('#personaje')
const btnBuscar = document.querySelector('#btn-buscar')
const resultado = document.querySelector('#resultado')
const lista = document.querySelector('#lista')

btnBuscar.addEventListener('click', async function buscarPersonaje() {
    if(rickyInput.value){  // validar antes de pedir
        
        try {
            resultado.textContent = 'Buscando...'
            const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${rickyInput.value}`)
            const datos = await respuesta.json()
            
            if(datos.error){ // gestionar error de la API
                resultado.textContent = 'Este personaje no es de Ricky Morty'
                return
            }else{
                const nombre = datos.results[0].name     // nombre del personaje
                const status = datos.results[0].status   // "Alive", "Dead" o "unknown"
                const species = datos.results[0].species  // especie
                const origin = datos.results[0].origin.name  // planeta de origen
                
                resultado.textContent = `Nombre: ${nombre}, Status: ${status}, Species: ${species}, Origin: ${origin} ` 
                const nuevoLi = document.createElement('li')
                nuevoLi.textContent = `Nombre: ${nombre}, Status: ${status}, Species: ${species}, Origin: ${origin}`
                const botonEliminar = document.createElement('button') //creamos botón
                botonEliminar.textContent = 'Eliminar'
                botonEliminar.addEventListener('click', function(){
                    nuevoLi.remove()
                    contador()
                })
                nuevoLi.appendChild(botonEliminar)
                lista.appendChild(nuevoLi)
                contador()
    }  
    

  } catch(error) {
    resultado.textContent = 'Algo no ha ido bien' + error}
        }else{
        resultado.textContent = 'Indica un personaje '// gestionar error de red
    }
})
function contador() {
        document.querySelector('#contador').textContent = 'Personajes: ' + lista.children.length}