import axios from 'axios'

const api = axios.create({
    baseURL: 'https://projetosaolourenco.netlify.app/',
    headers: {
        "Content-Type": "application/json"
    }
});

const apiService  = {
    fetchData: async (endpoint) => {
        try{
            const reponse = await api.get(endpoint)
            return reponse.data;
        } catch (error){
            throw new error(error)
        }
    },
}

export default apiService;