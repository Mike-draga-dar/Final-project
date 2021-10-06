import actions from "../api";
import { useState, useEffect } from "react"
import axios from "axios";



function RandomImages(props, i) {
    const [images, setImages] = useState({});


    useEffect(async () => {

        let res = await actions.getAllDrinks({ skip: 0, limit: 450 })
        setImages(res.data)

    }, [])
    let random = Math.floor(Math.random() * images.length)



    return (
        <div className="container">
            <div className="red-header">
                <p>Random Drink</p>
            </div>
            <br></br>
            <br></br>
            <div className="drink">
                <div className="drink-photo">
                    <img src={images?.[random]?.image} className="single-drink-img"></img>
                </div>
                <div className="drink-info">
                    <h1>{images?.[random]?.name}</h1>

                    <h2>Ingredients</h2>
                    {images?.[random]?.ingredients.map(eachIngredient => {
                        return (
                            <li>{eachIngredient}</li>
                        )
                    })}

                    <h2>Measurements</h2>
                    {images?.[random]?.measurements.map(eachMeasurement => {
                        return (
                            <li>{eachMeasurement}</li>
                        )
                    })}

                    <h2>Instructions</h2>
                    {images?.[random]?.instructions}


                    <h3> Likes:</h3>
                    <button onClick >Like 👍</button>
                </div>
            </div>
        </div>
    )
}

export default RandomImages;