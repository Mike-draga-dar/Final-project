import { useEffect, useState } from 'react';
import actions from '../api'

function AllDrinks(props) {
    const [drinks, setDrinks] = useState([])

    useEffect(async () => {
        let res = await actions.getAllDrinks()
        setDrinks(res.data.reverse())
    }, [])


    const handleClick = async (whichPostId, i) => {
        console.log('click', whichPostId)
        let res = await actions.likePost(whichPostId)
        console.log(res.data)
        let newDrinks = [...drinks]
        newDrinks[i] = res.data
        setDrinks(newDrinks)
    }
    console.log(drinks)
    const ShowPosts = () => {
        return drinks.map((eachDrink, i) => {
            return (
                <div key={eachDrink._id}>
                    <img src={eachDrink.userId?.imageUrl}></img>
                    <h2> {eachDrink.userId?.name}</h2>
                    <h3>{eachDrink.name}</h3>
                    <p>{eachDrink.drink}</p>
                    <p>{eachDrink.instructions}</p>
                    <img src={eachDrink.image}></img>
                    <h3>Likes: {eachDrink.likes}</h3>
                    <button onClick={(e) => handleClick(eachDrink._id, i)} >Like 👍</button>
                    <hr></hr>
                </div>
            )
        })
    }
    console.log(drinks)
    return (
        <div className="container">
            <div className="red-header"><p>All Drinks</p></div><br></br>
            <br></br>
            <ShowPosts />
        </div>
    );
}

export default AllDrinks;