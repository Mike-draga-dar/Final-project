import React from 'react'
import { useEffect, useState } from "react"
import axios from 'axios';
import actions from '../api';
import heart from '../../src/heart.png'



function CocktailDetails(props, i) {

    let [details, setDetails] = useState({})
    

    useEffect(async () => {
        let res = await actions.getOneCocktail(props.match.params.drinkId)

        setDetails(res.data)
    }, [])


    const handleClick = async (whichPostId, i) => {

        let res = await actions.likePost(whichPostId)
        console.log(res.data)
        setDetails(res.data)
    }

    const ShowDetails = () => {
        return (
            <div>
                <div className="red-header">
                    <p>All Drinks</p>
                </div>
                <br></br>
                <br></br>
                <div className="drink">
                    <div className="drink-photo">
                        <img src={details.image} alt="Cocktail Image" className="single-drink-img"></img>
                    </div>
                    <div className="drink-info">
                        <h1>{details.name}</h1>

                        <h2>Ingredients</h2>
                        {details?.ingredients?.map(each => <li>{each}</li>)}<br></br>
                        <h2>Measurements</h2>
                        {details?.measurements?.map(each => <li>{each}</li>)}<br></br>

                        <h2>Instructions</h2>
                        {details.instructions}

                        <br></br>
                        <br></br>
                        
                        <div className="like-button">
                            <div className="like-left">
                            <button disabled={details.likes && details.likes.includes(props.user._id)} onClick={(e) => handleClick(details._id, i)}><img src={heart}></img></button>
                            </div>

                            <div className="like-right">
                                {details.likes && details.likes.length} Likes
                            </div>
                        </div>

                        {/* <h4>Likes : {details.likes && details.likes.length}</h4> */}
                        {/* <button disabled={details.likes && details.likes.includes(props.user._id)} onClick={(e) => handleClick(details._id, i)}>Like 👍</button> */}
                    </div>
                </div>


            </div>
        )
    }

    return (
        <div className="container">
            <ShowDetails />
        </div>
    );

}
export default CocktailDetails;