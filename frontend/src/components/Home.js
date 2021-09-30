import React from 'react';
import { useEffect, useState } from "react"
import axios from 'axios';
import actions from '../api';



function Home() {

    const [drinks, setDrinks] = useState([])


    useEffect(async () => {
        let res = await actions.getDrinks()
        setDrinks(res.data.drinks)
    }, [])

    console.log(drinks)

    const ShowDrinks = () => {
        return drinks.map(eachDrink => {
            return (
                <div >
                    {eachDrink.strDrink}
                    <br />
                    {eachDrink.strGlass}
                    <hr />


                </div>
            )
        })
    }


    return (
        <div>
            <h1>New Drinks</h1>
            <hr />
            <h1>View More</h1>

            <div>

                <h3>{drinks.drinks?.[1]?.strDrink}</h3>
                <h3>{drinks.drinks?.[1]?.strGlass}</h3>
                <h3>{drinks.drinks?.[1]?.strInstructions}</h3>
                <h2> {drinks.drinks?.[1]?.strIngredient1}</h2>
                <h2> {drinks.drinks?.[1]?.strIngredient2}</h2>
                <h2> {drinks.drinks?.[1]?.strIngredient3}</h2>
                <h2> {drinks.drinks?.[1]?.strIngredient4}</h2>
                <h2> {drinks.drinks?.[1]?.strIngredient5}</h2>

                <img src={drinks.drinks?.[1]?.strDrinkThumb} alt="Drinks" />


                <ShowDrinks />

            </div>


        </div>
    );
}

export default Home;