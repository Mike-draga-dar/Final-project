import actions from "../api";
import { useState, useEffect } from "react"
import axios from "axios";
import heart from '../../src/heart.png'


function RandomImages(props, i) {
    // const [images, setImages] = useState([]);
    const [drink, setDrink] = useState({})


    useEffect(async () => {

        let res = await actions.getAllDrinks({ skip: 0, limit: 450 })
        console.log(res.data)
        //setImages(res.data)
        setDrink(res.data[Math.floor(Math.random() * res.data.length)])
    }, [])




    const handleClick = async (whichPostId, i) => {

        let res = await actions.likePost(whichPostId)
        console.log(res.data)
        //setImages(res.data)
        setDrink(res.data)
    }


    return (
        <div className="container">
            <div className="red-header">
                <p>Random Drink</p>
            </div>
            <br></br>
            <br></br>
            <div className="drink">
                <div className="drink-photo">
                    <img src={drink?.image} className="single-drink-img"></img>
                </div>
                <div className="drink-info">
                    <h1>{drink?.name}</h1>

                    <h2>Ingredients</h2>
                    {drink.ingredients && drink?.ingredients.map(eachIngredient => {
                        return (
                            <li>{eachIngredient}</li>
                        )
                    })}

                    <h2>Measurements</h2>
                    {drink.measurements && drink?.measurements.map(eachMeasurement => {
                        return (
                            <li>{eachMeasurement}</li>
                        )
                    })}

                    <h2>Instructions</h2>
                    {drink?.instructions}

                    <br></br>
                    <br></br>

                    <div className="like-button">
                        <div className="like-left">
                            <button disabled={drink?.likes && drink?.likes.includes(props.user._id)} onClick={(e) => handleClick(drink?._id, i)}><img src={heart} id="like-heart"></img></button>
                        </div>

                        <div className="like-right">
                            {drink?.likes && drink?.likes.length} Likes
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RandomImages;