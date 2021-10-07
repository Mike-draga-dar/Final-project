import actions from "../api";
import { useState, useEffect } from "react"
import axios from "axios";
import heart from '../../src/heart.png'
import React from 'react'



function RandomImages(props, i) {
    const [images, setImages] = useState({});
    
    
    const random = Math.floor(Math.random() * images.length);
    
    useEffect(async () => {

        let res = await actions.getAllDrinks({ skip: 0, limit: 450 })
        setImages(res.data)

    }, [])


    const handleClick = async (whichPostId, i) => {

        let res = await actions.likePost(whichPostId)
        console.log(res.data)
        setImages(res.data)
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


                    <div className="like-button">
                            <div className="like-left">
                            <button disabled={images?.[random]?.likes && images?.[random]?.likes.includes(props.user._id)} onClick={(e) => handleClick(images?.[random]?._id, i)}><img src={heart}></img></button>
                            </div>

                            <div className="like-right">
                                {images?.[random]?.likes && images?.[random]?.likes.length} Likes
                            </div>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default RandomImages;