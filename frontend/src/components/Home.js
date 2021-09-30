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
        <div className="container">
            Home
        </div>
    );
}

export default Home;