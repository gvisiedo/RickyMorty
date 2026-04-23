export async function buscarPersonaje(nombre) { // validar antes de pedir
        try{

            const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
            const datos = await respuesta.json()
            return datos
        }catch(error) {
    return null
    }
}