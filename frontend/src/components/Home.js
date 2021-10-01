import React from 'react';
import { useEffect, useState } from "react"
import axios from 'axios';
import actions from '../api';
import { Link } from 'react-router-dom'



function Home() {

    const [drinks, setDrinks] = useState([])


    useEffect(async () => {
        let res = await actions.getDrinks()
        setDrinks(res.data.drinks)
    }, [])

    console.log(drinks)

    const ShowDrinks = () => {
        return (

            < ul >
                {
                    drinks.map((drink) => {
                        return <Link key={drink._id} to={`/drinks/${drink._id}`}>
                            <li>
                                {drink.strDrink}
                                <img src={drink.strDrinkThumb} alt="random Drinks" width="250px" />
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