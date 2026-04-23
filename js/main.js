import { buscarPersonaje } from "./api.js"
import { mostrarResultado, añadirHistorial,actualizarContador } from "./ui.js"

const rickyInput = document.querySelector('#personaje')
const btnBuscar = document.querySelector('#btn-buscar')
const resultado = document.querySelector('#resultado')

btnBuscar.addEventListener('click', async function () {
    if(rickyInput.value){  // validar antes de pedir
        
        try {
            resultado.textContent = 'Buscando...'
            const datos = await buscarPersonaje(rickyInput.value)
            
            if(datos.error){ // gestionar error de la API
                resultado.textContent = 'Este personaje no es de Ricky Morty'
                return
            }else{
                const nombre = datos.results[0].name     // nombre del personaje
                const status = datos.results[0].status   // "Alive", "Dead" o "unknown"
                const species = datos.results[0].species  // especie
                const origin = datos.results[0].origin.name  // planeta de origen
                mostrarResultado(nombre, status, species, origin)
                añadirHistorial(nombre, status, species, origin)
                }
               
    }catch(error) {
    resultado.textContent = 'Algo no ha ido bien' + error}
        }else{
        resultado.textContent = 'Indica un personaje '// gestionar error de red
    }
})
