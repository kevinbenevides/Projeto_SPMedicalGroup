import axios from 'axios';

//Serviço generico para fazer as chamadas para api
export default {
    call(endpoint) {
        let urlApi = `http://localhost:5000/api/${endpoint}`;
        let token = localStorage.getItem("usuario-Spmedgroup");

        return {
            getOne: ({ id }) => axios.get(`${urlApi}/${id}`),
            getAll: () => axios.get(`${urlApi}`, { headers: { "Authorization": "Bearer " + token } }),
            update: (toUpdate) => axios.put(urlApi, toUpdate),
            create: (toCreate) => axios.post(urlApi, toCreate),
            delete: ({ id }) => axios.delete(`${urlApi}/${id}`)
        }
    }
}