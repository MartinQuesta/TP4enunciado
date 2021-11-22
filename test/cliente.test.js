import ClientePersonas from '../src/clienteRest.js'

const url = 'http://localhost:3000/personas'

try {

    const cliente = new ClientePersonas(url)

    const marian = {
        autor: 'marian',
        domicilio: 'almagro'
    }

    const marianGuardado = await cliente.agregar(marian)
    console.log(marianGuardado)

    const laura = {
        autor: 'laura',
        domicilio: 'once'
    }

    const lauGuardada = await cliente.agregar(laura)
    console.log(lauGuardada)

    const personas = await cliente.obtener()
    console.log(personas)
    
} catch (error) {
    console.log(error)
}
