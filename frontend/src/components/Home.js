import React from 'react';
import { useEffect, useState } from "react"
import axios from 'axios';
import actions from '../api';
import { Link } from 'react-router-dom'
import CocktailDetails from "./CocktailDetails"



function Home() {

    const [drinks, setDrinks] = useState([])


    useEffect(async () => {
        let res = await actions.getAllDrinks()
        // console.log(res.data)
        setDrinks(res.data)
    }, [])

    // console.log(drinks)

    const ShowDrinks = () => {
        return (

            < ul >
                {drinks.map((drink) => {
                    return <Link key={drink._id} to={`/drinks/${drink._id}`}>
                        <li onClick={CocktailDetails}>
                            {drink.name}
                            <img src={drink.image} alt="image" width="200px" />

                            <hr />
                        </li>
                    </Link>
                })
                }
            </ul >
        )
    }


    return (
        <div className="container">
            <ShowDrinks />
        </div>
    );
}

export default Home;