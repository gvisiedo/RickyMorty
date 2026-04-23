
const resultado = document.querySelector('#resultado')
const lista = document.querySelector('#lista')

export function mostrarResultado(nombre, status, species, origin) {
  // muestra los datos en resultado.textContent               
                resultado.textContent = `Nombre: ${nombre}, Status: ${status}, Species: ${species}, Origin: ${origin} ` 
            }
            
export function añadirHistorial(nombre, status, species, origin) {
  // crea el li, el botón eliminar y lo añade a la lista
                const nuevoLi = document.createElement('li')
                nuevoLi.textContent = `Nombre: ${nombre}, Status: ${status}, Species: ${species}, Origin: ${origin}`
                const botonEliminar = document.createElement('button') //creamos botón
                botonEliminar.textContent = 'Eliminar'
                botonEliminar.addEventListener('click', function(){
                    nuevoLi.remove()
                    actualizarContador()
                })
                nuevoLi.appendChild(botonEliminar)
                lista.appendChild(nuevoLi)
                actualizarContador()
}

export function actualizarContador() {
  // actualiza el contador
  document.querySelector('#contador').textContent = 'Personajes: ' + lista.children.length
}