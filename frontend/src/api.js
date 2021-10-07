import axios from 'axios';

let SERVER_URL = process.env.NODE_ENV === 'development' ? `http://localhost:5000/api` : `https://dar-mik-dra.herokuapp.com/api`

const createHeader = () => { //Sends my token to the backend
    return { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } }
}


//THIS IS WHERE WE CONNECT TO THE BACKEND >> OUR FRONT END ROUTES
const actions = {
    getAllDrinks: async ({ limit, skip }) => {
        return await axios.get(`${SERVER_URL}/all-drinks?limit=${limit}&skip=${skip}`, createHeader())
    },
    createNewPost: async ({ name, ingredients, instructions, image, measurements }) => {
        return await axios.post(`${SERVER_URL}/new-drink`, { name, ingredients, instructions, image, measurements }, createHeader())

    },
    authenticate: async (user) => {
        let res = await axios.post(`${SERVER_URL}/authenticate`, user)
        localStorage.setItem('token', res.data.token)
    },
    getUser: async () => {
        return await axios.get(`${SERVER_URL}/get-user`, createHeader())
    },
    getMyPosts: async () => {
        return await axios.get(`${SERVER_URL}/my-drinks`, createHeader())
    },
    likePost: async (drinkId) => {
        return await axios.post(`${SERVER_URL}/like-drink`, { drinkId }, createHeader())
    },
    getRandomDrinks: async () => {
        return await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    },
    getDrinks: async () => {
        return await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    },
    getOneCocktail: async (drinkId) => {
        return await axios.post(`${SERVER_URL}/getOneCocktail`, { drinkId }, createHeader())
    },
    searchDrink: async (keyword) => {
        return await axios.get(`${SERVER_URL}/results?keyword=${keyword}`)
    },
    getLikedDrinks: async () => {
        return await axios.get(`${SERVER_URL}/getLikedDrinks`, createHeader())
    },
}


export default actions