import React from 'react'
import { useEffect, useState } from "react"
import axios from 'axios';
import actions from '../api';




function CocktailDetails(props) {

    let [details, setDetails] = useState({})

    useEffect(async () => {
        let res = await actions.getOneCocktail(props.match.params.drinkId)
        console.log(res.data)
        setDetails(res.data)
    }, [])  


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