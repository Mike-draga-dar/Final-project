import axios from 'axios';

let SERVER_URL = process.env.NODE_ENV === 'development' ? `http://localhost:5000/api` : `https://dar-mik-dra.herokuapp.com/api`

const createHeader = () => { //Sends my token to the backend
    return { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } }
}


//THIS IS WHERE WE CONNECT TO THE BACKEND >> OUR FRONT END ROUTES
const actions = {
    getAllDrinks: async () => {
        return await axios.get(`${SERVER_URL}/all-drinks`, createHeader())
    },
    createNewPost: async ({ title, post, instructions, image }) => {
        return await axios.post(`${SERVER_URL}/new-drink`, { title, post, instructions, image }, createHeader())

    },
    authenticate: async (user) => {
        let res = await axios.post(`${SERVER_URL}/authenticate`, user)
        localStorage.setItem('token', res.data.token)
    },
    getUser: async () => {
        return await axios.get(`${SERVER_URL}/get-user`, createHeader())
    },
    getMyPosts: async () => {
        return await axios.get(`${SERVER_URL}/my-posts`, createHeader())
    },
    likePost: async (drinkId) => {
        return await axios.post(`${SERVER_URL}/like-post`, { drinkId }, createHeader())
    },
    getRandomDrinks: async () => {
        return await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    },
    getDrinks: async () => {
        return await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    }
}


export default actions