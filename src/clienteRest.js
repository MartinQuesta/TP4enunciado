import axios from 'axios'

class ClienteHTTP {
    constructor(url) {
        this.url = url
    }
    ///CRUD por axios
    async agregar(recurso) {
        try {
            const respuesta = await axios.post(this.url, recurso)
            return respuesta.data
        } catch (error) {
            throw error.response
        }
    }

    async obtener(params = {}) {
        const queryString = new URLSearchParams(params).toString();
        const url = `${this.url}${queryString ? '?' + queryString : ''}`
        try {
            const respuesta = await axios.get(url)
            return respuesta.data
        } catch (error) {
            throw error.response
        }
    }

    async borrar(id) {
        try {
            const respuesta = await axios.delete(`${this.url}/${id}`)
            return respuesta.data
        } catch (error) {
            throw error.response
        }
    }
}

export default ClienteHTTP
