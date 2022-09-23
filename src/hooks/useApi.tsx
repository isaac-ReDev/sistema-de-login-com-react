import axios from 'axios'

const api = axios.create({
    baseURL: "https://api.google.com"
})

export const useApi = () => ({
    validateToken: async (token:string) => {
        return{
            user:{id:32, name:"isaac", email:"isaac123@gmail.com"  },
        };
        const response = await api.post("/validate");
        return response.data;
    },
    sigIn: async (email:string, password:string) => {
        return{
            user:{id:32, name:"isaac", email:"isaac123@gmail.com"  },
            token: "12345m6789q"
        };
        const response = await api.post("/signin", {email, password});
        return response.data;
    },
    logout: async () => {
        return{status:true}
        const response = await api.post("/logout");
        return response.data;
    } ,
});